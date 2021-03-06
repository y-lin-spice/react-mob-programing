import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_TODOS } from "../graphql/queries/getTodo";

const cache = new InMemoryCache({
  typePolicies: {}
});
export const createApolloClient = () => {
  const client = new ApolloClient({
    uri: "https://graphqlzero.almansi.me/api",
    cache
  });
  // client.writeQuery({
  //   query: GET_TODOS,
  //   data: {
  //     todos: Array(50)
  //       .fill(0)
  //       .map((_, index) => ({
  //         id: index,
  //         title: `Todo${index}`,
  //         tags: [`tag${index}`],
  //         isFinished: false
  //       }))
  //   }
  // });
  return client;
};
