import { useQuery } from "@apollo/client";
import { GetTodosResultType, GET_TODOS } from "../lib/graphql/queries/getTodo";

export const useTags = (): string[] => {
  const { data } = useQuery<GetTodosResultType>(GET_TODOS);
  const tags =
    data?.todos
      .flatMap((todo) => {
        return todo.tags || [];
      })
      .filter((tag, i, tags) => tags.indexOf(tag) === i) || [];
  return tags;
};
