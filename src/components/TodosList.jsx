import { CreateTaskButton } from './CreateTaskButton'
import { TodoElement } from './TodoElement'
import './TodosList.css'

export function TodosList ({ todos, setTodos }) {
  const activeTodos = todos.filter(todo => !todo.completed)
  const completedTodos = todos.filter(todo => !!todo.completed)

  const onComplete = (id) => {
    const newTodos = [...todos]
    const selectedTodoIndex = newTodos.findIndex(todo => todo.id === id)
    newTodos[selectedTodoIndex].completed = !newTodos[selectedTodoIndex].completed
    window.localStorage.setItem('todos', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  const onEdit = (id, name) => {
    const newTodos = [...todos]
    const selectedTodoIndex = newTodos.findIndex(todo => todo.id === id)
    newTodos[selectedTodoIndex].name = name
    window.localStorage.setItem('todos', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  const onCreate = () => {
    const newTodos = [...todos,
      {
        id: todos.length + 1,
        name: '',
        completed: false
      }
    ]
    window.localStorage.setItem('todos', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  const onDelete = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    window.localStorage.setItem('todos', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  return (
    <>
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
    </>
  )
}
