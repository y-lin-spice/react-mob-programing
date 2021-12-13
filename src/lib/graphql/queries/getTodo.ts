import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  query GetTodos {
    # isLoggedIn @client
    todos {
      title
      isFinished
    } @client
  }
`;
