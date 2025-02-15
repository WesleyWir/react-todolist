export default function TodoCard(props) {
    const { children, handleDeleteTodo, index, handleEditTodo } = props;
    return (
        <li className="todoItem">
            {children}
            <div className='actionsContainer'>
                <button>
                    <i className="fa-solid fa-pen-to-square"></i></button>
            </div>
        </li>
    )
}
