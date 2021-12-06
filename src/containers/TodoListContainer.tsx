import { useContext } from "react";
import { TodoContext } from "../providers/TodoProvider";
import { TodoComponent } from "../components/Todo";
import { useTodoHandler } from "../hooks/useTodoHandler";

export const TodoListContainer = () => {
  const { todos } = useContext(TodoContext);
  const todoHandler = useTodoHandler();
  return (
    <ul>
      {todos?.map((todo) => {
        return (
          <li key={todo.id}>
            <TodoComponent todo={todo} onClick={todoHandler(todo)} />
          </li>
        );
      })}
    </ul>
  );
};
