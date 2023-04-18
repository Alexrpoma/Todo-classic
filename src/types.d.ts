import { type TODO_FILTERS } from './consts'

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'> // ? With Pick, we can pick a subset of the properties of a type, res: { id: number; }

export type TodoTitle = Pick<Todo, 'title'>

export type ListTodos = Todo[]

export type FilterValues = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
