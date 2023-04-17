import { type FC, useState } from 'react'
import { Todos } from './components/Todos'

const mockTodos = [
  {
    id: 1,
    title: 'Todo 1',
    completed: false
  },
  {
    id: 2,
    title: 'Todo 2',
    completed: true
  },
  {
    id: 3,
    title: 'Todo 3',
    completed: false
  },
  {
    id: 4,
    title: 'Todo 4',
    completed: true
  },
  {
    id: 5,
    title: 'Todo 5',
    completed: false
  },
  {
    id: 6,
    title: 'Todo 6',
    completed: true
  }
]

const App: FC = () => {
  const [todos, setTodos] = useState(mockTodos)

  return (
    <div className="App">
      <h1>Todo mvc</h1>
      <Todos todos={todos}/>
    </div>
  )
}

export default App
