import { CreateTaskButton } from './CreateTaskButton'
import { TodoElement } from './TodoElement'
import './TodosList.css'

export function TodosList ({ todos }) {
  const activeTodos = todos.filter(todo => !todo.completed)
  const completedTodos = todos.filter(todo => !!todo.completed)

  return (
    <>
      <ul className='todos-list'>
        {
          completedTodos.map(todo => (
            <li key={todo.id}>
              <TodoElement name={todo.name} />
            </li>
          ))
        }
      </ul>

      <CreateTaskButton />

      <ul className='todos-list completed'>
        {
          activeTodos.map(todo => (
            <li key={todo.id}>
              <TodoElement name={todo.name} />
            </li>
          ))
        }
      </ul>
    </>
  )
}
