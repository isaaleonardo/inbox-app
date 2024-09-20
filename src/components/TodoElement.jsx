import { useId, useState } from 'react'

export function TodoElement ({ todo, onToggle, onEdit, isNew }) {
  const [isEditing, setIsEditing] = useState(isNew)
  const [providedName, setProvidedName] = useState(todo.name)
  const inputId = useId()

  const handleSubmit = (e) => {
    e.preventDefault()
    onEdit(todo.id, providedName)
    setIsEditing(false)
  }

  const handleKeyUp = (e) => {
    if (e.key === 'Escape') {
      setProvidedName(todo.name)
      setIsEditing(false)
    }
  }

  const handleClick = () => {
    if (!todo.completed) {
      setIsEditing(true)
    }
  }

  return (
    <>
      <button className='check' onClick={onToggle}>
        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='icon icon-tabler icons-tabler-outline icon-tabler-check'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M5 12l5 5l10 -10' /></svg>
      </button>

      {
        isEditing
          ? (
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                autoFocus
                id={inputId}
                value={providedName}
                onChange={e => setProvidedName(e.target.value)}
                onKeyUp={handleKeyUp}
              />
              <button type='submit'>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='icon icon-tabler icons-tabler-outline icon-tabler-edit'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1' /><path d='M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z' /><path d='M16 5l3 3' /></svg>
              </button>
              <button type='button' onClick={() => setIsEditing(false)}>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='icon icon-tabler icons-tabler-outline icon-tabler-circle-x'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' /><path d='M10 10l4 4m0 -4l-4 4' /></svg>
              </button>
            </form>
            )
          : (
            <div onClick={handleClick}>
              <p>{todo.name}</p>
              <div className='edit'>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='icon icon-tabler icons-tabler-outline icon-tabler-edit'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1' /><path d='M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z' /><path d='M16 5l3 3' /></svg>
                <span>Click to edit</span>
              </div>
            </div>
            )
      }
    </>
  )
}
