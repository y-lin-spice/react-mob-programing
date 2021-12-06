import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();
export const createApolloClient = () => new ApolloClient({ uri: "", cache });
