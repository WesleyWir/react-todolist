import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState<string[]>([])
  const [todoValue, setTodoValue] = useState<string>('')
  const [editing, setEditing] = useState<boolean>(false)
  const [editingIndex, setEditingIndex] = useState<null | number>(null)

  function persistData(todos: string[]) {
    localStorage.setItem('todos', JSON.stringify({ todos }));
  }

  function resetEdit() {
    setEditing(false);
    setEditingIndex(null);
    setTodoValue('');
  }

  function handleAddTodos(todo: string) {
    if (todo.length == 0) {
      resetEdit();
      return;
    }
    if (editing) {
      const index = editingIndex;
      if (index === null) return;
      const newTodoList = [...todos];
      newTodoList[index] = todo;
      persistData(newTodoList);
      setTodos(newTodoList);
      resetEdit();
      return;
    }
    const newTodoList = [...todos, todo];
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
    setTodoValue(todos[index]);
    setEditing(true);
    setEditingIndex(index);
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
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
      <TodoInput editing={editing} todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
    </main>
  )
}

export default App
