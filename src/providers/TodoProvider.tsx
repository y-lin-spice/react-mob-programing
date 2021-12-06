import { Todo } from "../types/Todo";
import { createContext, useState } from "react";

export const TodoContext = createContext<{
  todos?: Todo[];
  setTodos?: React.Dispatch<React.SetStateAction<Todo[]>>;
}>({ todos: undefined, setTodos: undefined });

export const TodoProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <TodoContext.Provider value={{ setTodos, todos }}>
      {props.children}
    </TodoContext.Provider>
  );
};
