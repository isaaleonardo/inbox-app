import './App.css'
import { Search } from './components/Search'
import { TodosList } from './components/TodosList'
import { useState } from 'react'

function App () {
  const [todos, setTodos] = useState(() => {
    const localStorageTodos = window.localStorage.getItem('todos')

    return localStorageTodos
      ? JSON.parse(localStorageTodos)
      : []
  })
  const [searchValue, setSearchValue] = useState('')

  const searchedTodos = todos.filter(todo => {
    const todoName = todo.name.toLocaleLowerCase()
    const searchTerm = searchValue.toLocaleLowerCase()

    return todoName.includes(searchTerm)
  })

  return (
    <>
      <h1>Inbox</h1>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodosList todos={searchedTodos} setTodos={setTodos} />
    </>
  )
}

export default App
