import { Dispatch, SetStateAction } from "react";
import { useAddTodos } from "../hooks/useAddTodos";

type AddTodoInputProps = {
  addTodos: ReturnType<typeof useAddTodos>;
  setTodoTitle: Dispatch<SetStateAction<string>>;
  todoTitle: string;
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
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
      <input
        type="text"
        value={props.tags?.join(",")}
        onChange={(event) => {
          props.setTags(event.target.value.split(/\s*,\s*/));
        }}
      />
      <button
        onClick={() => {
          props.addTodos({
            title: props.todoTitle,
            tags: props.tags
          });
          props.setTodoTitle("");
          props.setTags([]);
        }}
      >
        追加
      </button>
    </div>
  );
};
