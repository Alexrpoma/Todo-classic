import { type FC, useState } from 'react'
import { Todos } from './components/Todos'
import type { TodoId, Todo, FilterValues, TodoTitle } from './types'
import { TODO_FILTERS } from './consts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

const mockTodos = [
  {
    id: 1,
    title: 'Aprender React',
    completed: false
  },
  {
    id: 2,
    title: 'Aprender Next',
    completed: true
  },
  {
    id: 3,
    title: 'Aprender TypeScript',
    completed: true
  },
  {
    id: 4,
    title: 'Aprender Java con Spring',
    completed: true
  },
  {
    id: 5,
    title: 'Aprender Microservicios',
    completed: false
  },
  {
    id: 6,
    title: 'Aprender los patrones de diseño',
    completed: true
  }
]

const App: FC = () => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValues>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(td => td.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<Todo, 'id' | 'completed'>): void => {
    const newTodos = todos.map(td => {
      if (td.id === id) {
        return {
          ...td,
          completed
        }
      }
      return td
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValues): void => {
    setFilterSelected(filter)
  }

  const activeCount = todos.filter(td => !td.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(td => {
    if (filterSelected === TODO_FILTERS.COMPLETED) return td.completed
    if (filterSelected === TODO_FILTERS.ACTIVE) return !td.completed
    return td
  })

  const handleClearCompleted = (): void => {
    const newTodos = todos.filter(td => !td.completed)
    setTodos(newTodos)
  }

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      // id: crypto.randomUUID(),
      id: Math.random(),
      title,
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Header
        onAddTodo={handleAddTodo}
      />
      <Todos
        todos={filteredTodos}
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
      />
      <Footer
        handleFilterChange={handleFilterChange}
        filterSelected={filterSelected}
        activeCount={activeCount}
        completedCount={completedCount}
        onClearCompleted={handleClearCompleted}
      />
    </div>
  )
}

export default App
