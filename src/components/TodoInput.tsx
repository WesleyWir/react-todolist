import { useEffect, useRef } from "react";
import { TodoInputProps } from "../types";

export default function TodoInput(props: TodoInputProps) {
    const input = useRef<HTMLInputElement>(null);
    const { handleAddTodos, todoValue, setTodoValue, editing } = props;

    function handleSubmit() {
        handleAddTodos(todoValue);
        setTodoValue('');
    }

    useEffect(() => {
        if (input.current) input.current.focus();
    }, []);

    return (
        <header>
            <form id="form-todo-input" action={handleSubmit}>
                <input
                    ref={input}
                    type="text"
                    value={todoValue}
                    onChange={(e) => setTodoValue(e.target.value)}
                    placeholder="Enter todo..."
                />
                <button type="submit">{editing ? 'Update' : 'Add'}</button>
            </form>
        </header>
    )
}