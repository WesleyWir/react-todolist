import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState<string[]>([])
  const [todoValue, setTodoValue] = useState('')

  function persistData(todos: string[]) {
    localStorage.setItem('todos', JSON.stringify({ todos }));
  }

  function handleAddTodos(newTodo: string) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index: number) {
    const newTodoList = [...todos];
    newTodoList.splice(index, 1);
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(index: number) {
    const value: string = todos[index];
    setTodoValue(value);
    handleDeleteTodo(index);
  }

  // initialize
  useEffect(() => {
    if (!localStorage) {
      return;
    }
    const storageTodos = localStorage.getItem('todos');
    if (!storageTodos) {
      return;
    }
    const todos = JSON.parse(storageTodos).todos
    setTodos(todos);
  }, [])

  return (
    <main>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </main>
  )
}

export default App
