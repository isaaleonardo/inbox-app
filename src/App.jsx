import './App.css'
import { Search } from './components/Search'
import { TodosList } from './components/TodosList'

function App () {
  return (
    <>
      <h1>Inbox</h1>
      <Search />
      <TodosList />
    </>
  )
}

export default App
