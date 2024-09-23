import './App.css'
import { Search } from './components/Search'
import { TodosList } from './components/TodosList'
import { useState } from 'react'
import { useStateWithLocalStorage } from './hooks/useStateWithLocalStorage'

function App () {
  const [todos, setTodos] = useStateWithLocalStorage('todos', [])
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
