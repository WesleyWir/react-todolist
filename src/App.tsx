import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { Todo } from "./types"

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [todoValue, setTodoValue] = useState<string>('')
  const [editing, setEditing] = useState<boolean>(false)
  const [editingIndex, setEditingIndex] = useState<null | number>(null)

  function persistData(todos: Todo[]) {
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
      newTodoList[index] = {
        id: Date.now(),
        title: todo,
        checked: newTodoList[index].checked
      };
      persistData(newTodoList);
      setTodos(newTodoList);
      resetEdit();
      return;
    }
    const newTodoList = [...todos, {
      id: Date.now(),
      title: todo,
      completed: false
    }];
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
    setTodoValue(todos[index].title);
    setEditing(true);
    setEditingIndex(index);
  }

  function handleChangeChecked(index: number) {
    const newTodoList = [...todos];
    newTodoList[index].checked =!newTodoList[index].checked;
    persistData(newTodoList);
    setTodos(newTodoList);
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
      <TodoList 
      handleEditTodo={handleEditTodo} 
      handleDeleteTodo={handleDeleteTodo}
      handleChangeChecked={handleChangeChecked} 
      todos={todos} 
      />
      <TodoInput editing={editing} todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
    </main>
  )
}

export default App
