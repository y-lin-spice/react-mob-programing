import { useContext } from "react";
import { TodoContext } from "../providers/TodoProvider";
import { Todo } from "../types/Todo";

export const useTodoHandler: () => (
  todo: Todo
) => React.MouseEventHandler = () => {
  const { setTodos } = useContext(TodoContext);
  return (todo) => (event) => {
    event.preventDefault();
    setTodos((prevState) => {
      return [
        ...prevState.slice(
          0,
          prevState.findIndex((t) => t.id === todo.id)
        ),
        {
          ...prevState.find((t) => t.id === todo.id)!,
          isFinished: !prevState.find((t) => t.id === todo.id)?.isFinished
        },
        ...prevState.slice(prevState.findIndex((t) => t.id === todo.id) + 1)
      ];
    });
  };
};
