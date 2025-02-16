import { ReactNode } from "react";

export interface TodoInputProps {
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
    todos: string[]
    handleDeleteTodo: (index: number) => void;
    handleEditTodo: (index: number) => void;
}