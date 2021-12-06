import React, { createContext, useState } from "react";
import { TodoComponent } from "./components/Todo";
import { TodoListContainer } from "./containers/TodoListContainer";
import { AddTodoContainer } from "./containers/AddTodoContainer";
import "./styles.css";
// import { TodoProvider } from "./providers/TodoProvider";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "./lib/apollo/InitialClient";

const client = createApolloClient();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <AddTodoContainer />
        <TodoListContainer />
      </div>
    </ApolloProvider>
  );
}
