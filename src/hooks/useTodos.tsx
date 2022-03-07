import { useQuery } from "@apollo/client";
import { GetTodosResultType, GET_TODOS } from "../lib/graphql/queries/getTodo";
import { Todo } from "../types/Todo"
export const useTodos: (opts?: {tags?: string[]}) => Todo[] | undefined = ({tags} = {}) => {
  const { data } = useQuery<GetTodosResultType>(GET_TODOS);

  const result = data?.todos.filter((todo) => !tags || todo.tags?.some((tag) => tags?.includes(tag)))

  return result;
};
