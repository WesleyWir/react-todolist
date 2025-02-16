import { TodoInputProps } from "../types";

export default function TodoInput(props: TodoInputProps) {
    const { handleAddTodos, todoValue, setTodoValue } = props;

    function handleSubmit() {
        handleAddTodos(todoValue);
        setTodoValue('');
    }

    return (
        <header>
            <form id="form-todo-input" action={handleSubmit}>
                <input
                    type="text"
                    value={todoValue}
                    onChange={(e) => setTodoValue(e.target.value)}
                    placeholder="Enter todo..."
                />
                <button type="submit">Add</button>
            </form>
        </header>
    )
}