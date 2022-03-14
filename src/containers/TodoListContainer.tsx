import { useReactiveVar } from "@apollo/client";
import React from "react";
import { TodoListItem, TodoList } from "../components";
import { useTodoHandler } from "../hooks/useTodoHandler";
import { useTodos } from "../hooks/useTodos";
import { selectedTags } from "../variables/selectedTags";

export const TodoListContainer = () => {
  const selectedTagsVar = useReactiveVar(selectedTags);
  console.log(selectedTagsVar);
  const todos = useTodos({
    tags: Object.entries(selectedTagsVar)
      .filter(([_, val]) => val)
      .map(([key]) => key)
  });
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
