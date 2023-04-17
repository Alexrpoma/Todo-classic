import { type FC } from 'react'
import { type ListTodos } from '../types'

interface Props {
  todos: ListTodos
}

export const Todos: FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}
