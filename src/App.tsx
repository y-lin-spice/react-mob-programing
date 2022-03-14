import {
  AddTodoInputContainer,
  TodoListContainer,
  FilterTagsContainer
} from "./containers";
import "./styles.css";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "./lib/apollo/InitialClient";

const client = createApolloClient();

// - apollo global state (reactive variable)
//   - w/o type policy

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <FilterTagsContainer />
        <AddTodoInputContainer />
        <TodoListContainer />
      </div>
    </ApolloProvider>
  );
}
