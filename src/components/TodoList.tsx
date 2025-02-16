import { TodoListProps } from "../types"
import TodoCard from "./TodoCard"

export default function TodoList(props: TodoListProps) {
    const { todos } = props
    return (
        <ul className='main scrollbar'>
            {todos.map((todo, index) => {
                return (
                    <TodoCard {...props} key={index} index={index}>
                        <p>{todo}</p>
                    </TodoCard>
                )

            })}
        </ul>
    )
}
