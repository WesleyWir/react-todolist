import { TodoListProps } from "../types"
import TodoCard from "./TodoCard"

export default function TodoList(props: TodoListProps) {
    const { todos, handleChangeChecked } = props

    return (
        <ul className='main scrollbar'>
            {todos.map((todo, index) => {
                return (
                    <TodoCard {...props} key={index} index={index}>
                        <input
                            type="checkbox"
                            checked={todo.checked}
                            onClick={() => handleChangeChecked(index)}
                        />
                        <p className={(todo.checked ? "checked" : "")}>{todo.title}</p>
                    </TodoCard>
                )

            })}
        </ul>
    )
}
