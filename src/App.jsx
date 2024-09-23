import './App.css'
import { Header } from './components/Header'
import { Search } from './components/Search'
import { TodosList } from './components/TodosList'
import { useState } from 'react'
import { useStateWithLocalStorage } from './hooks/useStateWithLocalStorage'
import { Footer } from './components/Footer'

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
      <Header setTodos={setTodos} />
      <main>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodosList todos={searchedTodos} setTodos={setTodos} />
      </main>
      <Footer />
    </>
  )
}

export default App
