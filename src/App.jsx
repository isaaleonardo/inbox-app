import './App.css'
import { Search } from './components/Search'
import { TodosList } from './components/TodosList'
import { useState } from 'react'

const TODOS = [
  {
    id: 1,
    name: 'hola',
    completed: false
  },
  {
    id: 2,
    name: 'hola',
    completed: true
  }
]

function App () {
  const [todos, setTodos] = useState(TODOS)

  return (
    <>
      <h1>Inbox</h1>
      <Search />
      <TodosList todos={todos} setTodos={setTodos} />
    </>
  )
}

export default App
