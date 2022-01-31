import { useQuery } from "@apollo/client";
import { GetTodosResultType, GET_TODOS } from "../lib/graphql/queries/getTodo";
export const useTodos = () => {
  const { data } = useQuery<GetTodosResultType>(GET_TODOS);

  return data?.todos;
};
