import { useState } from "react";
import { AddTodoInput } from "../components";
import { useAddTodos } from "../hooks/useAddTodos";

export const AddTodoInputContainer: React.FC = () => {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const addTodos = useAddTodos();

  console.log({ tags });
  return (
    <AddTodoInput {...{ tags, setTags, addTodos, todoTitle, setTodoTitle }} />
  );
};
