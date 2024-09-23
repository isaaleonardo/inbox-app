export function useTodos (todosList, setTodosList) {
  const onCreate = () => {
    const newTodos = [...todosList,
      {
        id: todosList.length + 1,
        name: '',
        completed: false
      }
    ]
    setTodosList(newTodos)
  }

  const onComplete = (id) => {
    const newTodos = [...todosList]
    const selectedTodoIndex = newTodos.findIndex(todo => todo.id === id)
    newTodos[selectedTodoIndex].completed = !newTodos[selectedTodoIndex].completed
    setTodosList(newTodos)
  }

  const onEdit = (id, name) => {
    const newTodos = [...todosList]
    const selectedTodoIndex = newTodos.findIndex(todo => todo.id === id)
    newTodos[selectedTodoIndex].name = name
    setTodosList(newTodos)
  }

  const onDelete = (id) => {
    const newTodos = todosList.filter(todo => todo.id !== id)
    setTodosList(newTodos)
  }

  return { onComplete, onEdit, onCreate, onDelete }
}
