import { useReactiveVar } from "@apollo/client";
import React from "react";
import { TodoListItem, TodoList } from "../components";
import { useTodoHandler } from "../hooks/useTodoHandler";
import { useTodos } from "../hooks/useTodos";
import { selectedTags } from "../variables/selectedTags";

const MemoTodoListItem = React.memo(TodoListItem, (prevProps, nextProps) => {
  return (
    prevProps.todo.id === nextProps.todo.id &&
    prevProps.todo.isFinished === nextProps.todo.isFinished
  );
});

export const TodoListContainer = () => {
  const selectedTagsVar = useReactiveVar(selectedTags);
  // console.log(selectedTagsVar);
  const tags = React.useMemo(
    () =>
      Object.entries(selectedTagsVar)
        .filter(([_, val]) => val)
        .map(([key]) => key),
    [selectedTagsVar]
  );
  const todos = useTodos({ tags });
  const todoHandler = useTodoHandler();

  return (
    <TodoList>
      {todos?.map((todo) => {
        return (
          <MemoTodoListItem
            key={todo.id}
            todo={todo}
            onClick={todoHandler(todo)}
          />
        );
      })}
    </TodoList>
  );
};
