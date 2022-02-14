import React, { ReactElement } from "react";
import { Todo } from "../types/Todo";

export const TodoListItem: React.FC<{
  todo: Todo;
  onClick: React.MouseEventHandler;
  className?: string;
}> = function ({ todo, onClick, className }): ReactElement {
  return (
    <li className={className}>
      {todo.title}({todo.tags?.join(",")})
      {todo.isFinished ? ": finished!!" : null}
      <button onClick={onClick}>{todo.isFinished ? "undo" : "done"}</button>
    </li>
  );
};
