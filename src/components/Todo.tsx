import React, { ReactElement } from "react";
import { Todo } from "../types/Todo";

export const TodoComponent: React.FC<{
  todo: Todo;
  onClick: React.MouseEventHandler;
}> = function (props): ReactElement {
  return (
    <>
      {props.todo.title}
      {props.todo.isFinished ? ": finished!!" : null}
      <button onClick={props.onClick}>
        {props.todo.isFinished ? "undo" : "done"}
      </button>
    </>
  );
};
