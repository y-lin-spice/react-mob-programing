import { useApolloClient } from "@apollo/client";
import { GetTodosResultType, GET_TODOS } from "../lib/graphql/queries/getTodo";
import { Todo } from "../types/Todo";

export const useAddTodos = () => {
  const apolloClient = useApolloClient();
  return (data: Pick<Todo, "title">) => {
    const prevTodos = apolloClient.cache.readQuery<GetTodosResultType>({
      query: GET_TODOS
    });
    console.log(prevTodos);
    apolloClient.cache.writeQuery({
      query: GET_TODOS,
      data: {
        todos: [
          ...(prevTodos?.todos || []),
          {
            __typename: "Todo",
            id: Math.floor(Math.random() * 1000),
            ...data
          }
        ]
      }
    });
  };
};
