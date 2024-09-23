import { useTodos } from '../hooks/useTodos'
import { CreateTaskButton } from './CreateTaskButton'
import { TodoElement } from './TodoElement'
import './TodosList.css'

export function TodosList ({ todos, setTodos }) {
  const activeTodos = todos.filter(todo => !todo.completed)
  const completedTodos = todos.filter(todo => !!todo.completed)
  const { onCreate, onComplete, onEdit, onDelete } = useTodos(todos, setTodos)

  return (
    <main>
      <ul className='todos-list'>
        {
          activeTodos.map(todo => (
            <li key={todo.id}>
              <TodoElement
                todo={todo}
                onComplete={onComplete}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            </li>
          ))
        }
      </ul>

      <CreateTaskButton onCreate={onCreate} />

      <ul className='todos-list completed'>
        {
          completedTodos.map(todo => (
            <li key={todo.id}>
              <TodoElement
                todo={todo}
                onComplete={onComplete}
              />
            </li>
          ))
        }
      </ul>
    </main>
  )
}
