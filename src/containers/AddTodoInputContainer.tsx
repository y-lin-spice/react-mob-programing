import { useState } from "react";
import { AddTodoInput } from "../components";
import { useAddTodos } from "../hooks/useAddTodos";

export const AddTodoInputContainer: React.FC = () => {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const addTodos = useAddTodos();

  return (
    <AddTodoInput
      addTodos={addTodos}
      todoTitle={todoTitle}
      setTodoTitle={setTodoTitle}
    />
  );
};
