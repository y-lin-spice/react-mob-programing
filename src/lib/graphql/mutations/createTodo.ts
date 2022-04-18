import { gql } from "@apollo/client";
import { Todo } from "../../../types/Todo";

export type CreateTodoVariables = {
  title: string;
  completed: boolean;
};

export type CreateTodoResultType = {
  createTodo: Todo;
};

export const CREATE_TODO = gql`
  mutation CreateTodo($title: String!, $completed: Boolean!) {
    createTodo(input: { title: $title, completed: $completed }) {
      id
      title
      completed
      tags @client
    }
  }
`;
