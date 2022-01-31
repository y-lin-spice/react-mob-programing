import { useApolloClient } from "@apollo/client";
import { Todo } from "../types/Todo";
import { GetTodosResultType, GET_TODOS } from "../lib/graphql/queries/getTodo";

export const useTodoHandler: () => (
  todo: Todo
) => React.MouseEventHandler = () => {
  const apolloClient = useApolloClient();
  return (todo) => (event) => {
    event.preventDefault();
    apolloClient.cache.updateQuery<GetTodosResultType>(
      { query: GET_TODOS },
      (data) => ({
        todos: data
          ? [
              ...data.todos.slice(
                0,
                data.todos.findIndex((t) => t.id === todo.id)
              ),
              {
                ...data.todos.find((t) => t.id === todo.id)!,
                isFinished: !data.todos.find((t) => t.id === todo.id)
                  ?.isFinished
              },
              ...data.todos.slice(
                data.todos.findIndex((t) => t.id === todo.id) + 1
              )
            ]
          : []
      })
    );
  };
};
