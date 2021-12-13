import { gql, useApolloClient } from "@apollo/client";
import { GET_TODOS } from "../lib/graphql/queries/getTodo";

// const IS_LOGGED_IN = gql`
//   query IsUserLoggedIn {
//     isLoggedIn @client
//   }
// `;

export const useAddTodos = () => {
  const apolloClient = useApolloClient();
  apolloClient.cache.writeQuery({
    query: GET_TODOS,
    data: {
      isLoggedIn: !!localStorage.getItem("token") // ?????
    }
  });
};
