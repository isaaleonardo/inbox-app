import { CreateTaskButton } from './CreateTaskButton'
import { TodoElement } from './TodoElement'
import './TodosList.css'

export function TodosList ({ todos, setTodos }) {
  const activeTodos = todos.filter(todo => !todo.completed)
  const completedTodos = todos.filter(todo => !!todo.completed)

  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const selectedTodoIndex = newTodos.findIndex(todo => todo.id === id)
    newTodos[selectedTodoIndex].completed = !newTodos[selectedTodoIndex].completed
    setTodos(newTodos)
  }

  return (
    <>
      <ul className='todos-list'>
        {
          completedTodos.map(todo => (
            <li key={todo.id}>
              <TodoElement
                name={todo.name}
                onToggle={() => toggleTodo(todo.id)}
              />
            </li>
          ))
        }
      </ul>

      <CreateTaskButton />

      <ul className='todos-list completed'>
        {
          activeTodos.map(todo => (
            <li key={todo.id}>
              <TodoElement
                name={todo.name}
                onToggle={() => toggleTodo(todo.id)}
              />
            </li>
          ))
        }
      </ul>
    </>
  )
}
