import './Header.css'

export function Header ({ setTodos }) {
  return (
    <header>
      <h1>Inbox</h1>
      <button onClick={() => setTodos([])}>
        Clean List
      </button>
    </header>
  )
}
