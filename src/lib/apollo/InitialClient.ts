import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_TODOS } from "../graphql/queries/getTodo";

const cache = new InMemoryCache();
export const createApolloClient = () => {
  const client = new ApolloClient({ uri: "", cache });
  client.writeQuery({
    query: GET_TODOS,
    data: { todos: [] }
  });
  return client;
};
