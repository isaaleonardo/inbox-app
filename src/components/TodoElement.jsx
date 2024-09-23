import { useId, useState } from 'react'

export function TodoElement ({ todo, onComplete, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(() => todo.name === '')
  const [providedName, setProvidedName] = useState(todo.name)
  const inputId = useId()

  const handleSubmit = (e) => {
    e.preventDefault()
    onEdit(todo.id, providedName)
    setIsEditing(false)
  }

  const handleKeyUp = (e) => {
    if (e.key === 'Escape') {
      if (todo.name !== '') {
        setIsEditing(false)
        return
      }

      if (providedName === '') {
        onDelete(todo.id)
        return
      }

      setProvidedName(todo.name)
      setIsEditing(false)
    }
  }

  const handleClick = () => {
    if (!todo.completed) {
      setIsEditing(true)
    }
  }

  const handleCheckboxClick = () => {
    if (!isEditing) {
      onComplete(todo.id)
    }
  }

  const onCancel = () => {
    if (todo.name !== '') {
      setIsEditing(false)
      return
    }

    if (providedName === '') {
      onDelete(todo.id)
    }
  }

  return (
    <>
      <button className='check' onClick={handleCheckboxClick}>
        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='icon icon-tabler icons-tabler-outline icon-tabler-check'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M5 12l5 5l10 -10' /></svg>
      </button>

      {
        isEditing
          ? (
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                required
                autoFocus
                autoComplete='off'
                placeholder='Task name'
                id={inputId}
                value={providedName}
                onChange={e => setProvidedName(e.target.value)}
                onKeyUp={handleKeyUp}
              />
              <div className='buttons'>
                <button type='submit'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='icon icon-tabler icons-tabler-outline icon-tabler-edit'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1' /><path d='M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z' /><path d='M16 5l3 3' /></svg>
                </button>
                <button type='button' onClick={onCancel}>
                  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='icon icon-tabler icons-tabler-outline icon-tabler-circle-x'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' /><path d='M10 10l4 4m0 -4l-4 4' /></svg>
                </button>
                <button type='button' onClick={() => onDelete(todo.id)}>
                  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='icon icon-tabler icons-tabler-outline icon-tabler-trash'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 7l16 0' /><path d='M10 11l0 6' /><path d='M14 11l0 6' /><path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' /><path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' /></svg>
                </button>
              </div>
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
