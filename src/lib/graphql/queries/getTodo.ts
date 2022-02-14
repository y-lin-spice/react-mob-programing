import { gql } from "@apollo/client";
import { Todo } from "../../../types/Todo";

export type GetTodosResultType = {
  todos: Todo[];
};

export const GET_TODOS = gql`
  query GetTodos {
    # isLoggedIn @client
    todos @client {
      id
      title
      isFinished
      tags
    }
  }
`;
