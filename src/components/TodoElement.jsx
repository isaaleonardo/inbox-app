import { useId, useState } from 'react'

export function TodoElement ({ todo, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [providedName, setProvidedName] = useState(todo.name)
  const inputId = useId()

  const handleSubmit = (e) => {
    e.preventDefault()
    onEdit(todo.id, providedName)
    setIsEditing(false)
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
                id={inputId}
                value={providedName}
                onChange={e => setProvidedName(e.target.value)}
              />
              <button>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='icon icon-tabler icons-tabler-outline icon-tabler-edit'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1' /><path d='M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z' /><path d='M16 5l3 3' /></svg>
              </button>
            </form>
            )
          : (
            <div onClick={() => setIsEditing(true)}>
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
