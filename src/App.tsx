import { AddTodoInputContainer, TodoListContainer } from "./containers";
import "./styles.css";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "./lib/apollo/InitialClient";

const client = createApolloClient();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <AddTodoInputContainer />
        <TodoListContainer />
      </div>
    </ApolloProvider>
  );
}
