import { Dispatch, SetStateAction } from "react";
import { useAddTodos } from "../hooks/useAddTodos";

type AddTodoInputProps = {
  addTodos: ReturnType<typeof useAddTodos>;
  setTodoTitle: Dispatch<SetStateAction<string>>;
  todoTitle: string;
};

export const AddTodoInput: React.FC<AddTodoInputProps> = (props) => {
  return (
    <div>
      <input
        value={props.todoTitle}
        onChange={(event) => {
          props.setTodoTitle(event.target.value);
        }}
      />
      <button
        onClick={() => {
          props.addTodos({
            title: props.todoTitle
          });
          props.setTodoTitle("");
        }}
      >
        追加
      </button>
    </div>
  );
};
