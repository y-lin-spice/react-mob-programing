import { Todo } from "../types/Todo";

type AddTodoProps = {
  todoTitle: string;
  setTodoTitle: React.Dispatch<React.SetStateAction<string>>;
  setTodos?: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const AddTodo: React.FC<AddTodoProps> = (props) => {
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
          if (!props.setTodos) {
            return;
          }
          props.setTodos((prevState) => [
            ...prevState,
            { title: props.todoTitle, id: Math.floor(Math.random() * 1000) }
          ]);
          props.setTodoTitle("");
        }}
      >
        追加
      </button>
    </div>
  );
};
