import { CreateTaskButton } from './CreateTaskButton'
import { TodoElement } from './TodoElement'
import './TodosList.css'

export function TodosList () {
  return (
    <>
      <ul className='todos-list'>
        <li>
          <TodoElement name='hola' />
        </li>
      </ul>

      <CreateTaskButton />
    </>
  )
}
