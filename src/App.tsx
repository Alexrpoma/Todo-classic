import { type FC, useState } from 'react'
import { Todos } from './components/Todos'
import type { TodoId, Todo } from './types'

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

  return (
    <div className="todoapp">
      <Todos
        todos={todos}
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
      />
    </div>
  )
}

export default App
