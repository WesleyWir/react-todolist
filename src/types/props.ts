import { ReactNode } from "react";
import { Todo } from "./models";

export interface TodoInputProps {
    editing: boolean;
    handleAddTodos: (todo: string) => void;
    todoValue: string;
    setTodoValue: (value: string) => void;
}

export interface TodoCardProps {
    children: ReactNode;
    handleDeleteTodo: (index: number) => void;
    index: number;
    handleEditTodo: (index: number) => void;
}

export interface TodoListProps {
    todos: Todo[]
    handleDeleteTodo: (index: number) => void;
    handleEditTodo: (index: number) => void;
    handleChangeChecked: (index: number) => void;
}