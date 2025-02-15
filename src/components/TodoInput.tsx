export default function TodoInput(props: { handleAddTodos: Function; todoValue: string; setTodoValue: Function; }) {
    const { handleAddTodos, todoValue, setTodoValue } = props;

    return (
        <header>
            <input
                type="text"
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
                placeholder="Enter todo..."
            />
            <button
                onClick={() => {
                    handleAddTodos(todoValue);
                    setTodoValue('');
                }}
            >Add</button>
        </header>
    )
}