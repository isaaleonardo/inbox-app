import { CreateTaskButton } from './CreateTaskButton'
import { TodoElement } from './TodoElement'
import './TodosList.css'

export function TodosList ({ todos }) {
  return (
    <>
      <ul className='todos-list'>
        {
          todos.map(todo => (
            <li key={todo.id}>
              <TodoElement name={todo.name} />
            </li>
          ))
        }
      </ul>

      <CreateTaskButton />
    </>
  )
}
