import React from "react";
import { TodoListItem, TodoList } from "../components";
import { useTodoHandler } from "../hooks/useTodoHandler";
import { useTodos } from "../hooks/useTodos";

export const TodoListContainer = () => {
  const todos = useTodos();
  const todoHandler = useTodoHandler();
  return (
    <TodoList>
      {todos?.map((todo) => {
        return (
          <TodoListItem key={todo.id} todo={todo} onClick={todoHandler(todo)} />
        );
      })}
    </TodoList>
  );
};
