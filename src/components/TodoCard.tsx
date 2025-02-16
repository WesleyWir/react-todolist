import { TodoCardProps } from "../types";

export default function TodoCard(props: TodoCardProps) {
    const { children, handleDeleteTodo, index, handleEditTodo } = props;
    return (
        <li className="todoItem">
            {children}
            <div className='actionsContainer'>
                <button
                    onClick={() => {
                        handleEditTodo(index);
                    }}
                >
                    <i className="fa-solid fa-pen-to-square" />
                </button>
                <button
                    onClick={() => {
                        handleDeleteTodo(index);
                    }}
                >
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </li>
    )
}
