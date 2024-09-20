import './App.css'
import { Search } from './components/Search'
import { TodosList } from './components/TodosList'
import { useState } from 'react'

function App () {
  const [todos, setTodos] = useState([])

  return (
    <>
      <h1>Inbox</h1>
      <Search />
      <TodosList todos={todos} setTodos={setTodos} />
    </>
  )
}

export default App
