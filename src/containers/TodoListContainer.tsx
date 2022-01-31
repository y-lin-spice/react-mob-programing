import { TodoComponent } from "../components/Todo";
import { useTodoHandler } from "../hooks/useTodoHandler";
import { useTodos } from "../hooks/useTodos";

export const TodoListContainer = () => {
  const todos = useTodos();
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
