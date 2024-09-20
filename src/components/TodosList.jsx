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

  const onEdit = (id, name) => {
    const newTodos = [...todos]
    const selectedTodoIndex = newTodos.findIndex(todo => todo.id === id)
    newTodos[selectedTodoIndex].name = name
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
                onToggle={() => toggleTodo(todo.id)}
                onEdit={onEdit}
                isNew={() => todo.name === ''}
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
                onToggle={() => toggleTodo(todo.id)}
              />
            </li>
          ))
        }
      </ul>
    </>
  )
}
