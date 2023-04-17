export interface Todo {
  id: number
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'> // With Pick, we can pick a subset of the properties of a type, res: { id: number; }

export type ListTodos = Todo[]
