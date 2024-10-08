import './Header.css'

export function Header ({ setTodos }) {
  const handleOpen = () => {
    const dialog = document.querySelector('dialog')
    dialog.showModal()
  }

  const handleClose = () => {
    const dialog = document.querySelector('dialog')
    dialog.close()
  }

  const handleConfirm = () => {
    setTodos([])
    handleClose()
  }

  return (
    <header>
      <dialog>
        <p>Are you sure you want to delete all tasks?</p>
        <div className='buttons'>
          <button onClick={handleConfirm}>Confirm</button>
          <button onClick={handleClose}>Cancel</button>
        </div>
      </dialog>

      <h1>Inbox</h1>
      <button onClick={handleOpen}>
        Clean List
      </button>
    </header>
  )
}
