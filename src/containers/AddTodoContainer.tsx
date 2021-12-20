import { useState } from "react";
import { AddTodo } from "../components/AddTodo";
import { useAddTodos } from "../hooks/useAddTodos";

export const AddTodoContainer: React.FC = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const addTodos = useAddTodos();

  return (
    <AddTodo
      addTodos={addTodos}
      todoTitle={todoTitle}
      setTodoTitle={setTodoTitle}
    />
  );
};
