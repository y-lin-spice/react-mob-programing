import { useContext, useState } from "react";
import { AddTodo } from "../components/AddTodo";
import { TodoContext } from "../providers/TodoProvider";

export const AddTodoContainer: React.FC = () => {
  const { setTodos } = useContext(TodoContext);
  const [todoTitle, setTodoTitle] = useState("");
  return (
    <AddTodo
      todoTitle={todoTitle}
      setTodoTitle={setTodoTitle}
      setTodos={setTodos}
    />
  );
};
