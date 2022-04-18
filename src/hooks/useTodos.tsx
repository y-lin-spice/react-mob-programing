import { useQuery } from "@apollo/client";
import { GetTodosResultType, GET_TODOS } from "../lib/graphql/queries/getTodo";
import { Todo } from "../types/Todo";
import { useMemo } from "react";

export const useTodos: (opts?: { tags?: string[] }) => Todo[] | undefined = ({
  tags
} = {}) => {
  const { data } = useQuery<GetTodosResultType>(GET_TODOS, {
    variables: {
      page: 1,
      limit: 10
    }
  });

  // const result = useMemo(() => {
  //   return data?.todos.filter(
  //     (todo) =>
  //       !tags ||
  //       tags.length === 0 ||
  //       todo.tags?.some((tag) => tags?.includes(tag))
  //   );
  // }, [data, tags]);

  return data?.todos.data;
};
