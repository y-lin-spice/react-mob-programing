import { useApolloClient } from "@apollo/client";
import { GetTodosResultType, GET_TODOS } from "../lib/graphql/queries/getTodo";
import { Todo } from "../types/Todo";

export const useAddTodos = () => {
  const apolloClient = useApolloClient();
  return (data: Pick<Todo, "title" | "tags">) => {
    const prevTodos = apolloClient.readQuery<GetTodosResultType>({
      query: GET_TODOS
    });
    console.log(prevTodos);
    apolloClient.writeQuery({
      query: GET_TODOS,
      data: {
        __typename: "Todos",
        todos: [
          ...(prevTodos?.todos || []),
          {
            __typename: "Todo",
            id: Math.floor(Math.random() * 1000),
            isFinished: false,
            ...data
          }
        ]
      }
    });
  };
};
