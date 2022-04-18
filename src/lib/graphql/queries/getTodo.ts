import { gql } from "@apollo/client";
import { Todo } from "../../../types/Todo";

export type GetTodosResultType = {
  todos: {
    data: Todo[];
  };
};

export const GET_TODOS = gql`
  query GetTodos($page: Int, $limit: Int) {
    # isLoggedIn @client
    todos(options: { paginate: { page: $page, limit: $limit } }) {
      data {
        id
        title
        completed
        tags @client
      }
    }
  }
`;
