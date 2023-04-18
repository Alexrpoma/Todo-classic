import { useState } from 'react'
import { type TodoTitle } from '../types'

interface Props {
  onAddTodo: (title: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    onAddTodo({ title: inputValue })
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
      className='new-todo'
      placeholder='¿Qué quieres hacer?'
      value={inputValue}
      onChange={event => { setInputValue(event.target.value) }}
      onKeyDown={() => {}} // TODO: Implementar la funcionalidad de añadir un TODO al pulsar la tecla Enter
      autoFocus
    />
    </form>
  )
}
