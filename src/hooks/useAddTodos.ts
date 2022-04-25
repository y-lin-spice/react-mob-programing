import { useApolloClient, useMutation } from "@apollo/client";
// import { GetTodosResultType, GET_TODOS } from "../lib/graphql/queries/getTodo";
import {
  CreateTodoResultType,
  CreateTodoVariables,
  CREATE_TODO
} from "../lib/graphql/mutations/createTodo";
import { Todo } from "../types/Todo";

export const useAddTodos = () => {
  // const apolloClient = useApolloClient();
  const [createTodo] = useMutation<CreateTodoResultType, CreateTodoVariables>(
    CREATE_TODO
  );
  // const prevTodos = apolloClient.readQuery<GetTodosResultType>({
  //   query: GET_TODOS
  // });

  return async (data: Pick<Todo, "title" | "tags">) => {
    return await createTodo({
      variables: { title: data.title, completed: false }
    }).then((result) => {
      // TODO: 帰ってくるTODOをキャッシュに書き込む
      // if (result.data && result.data.createTodo) {
      //   apolloClient.writeQuery({
      //     query: GET_TODOS,
      //     data: {
      //       __typename: "TodosPage",
      //       todos: {
      //         data: [
      //           ...(prevTodos?.todos.data || []),
      //           {
      //             __typename: "Todo",
      //             id: Math.floor(Math.random() * 1000),
      //             completed: false,
      //             ...data
      //           }
      //         ]
      //       }
      //     }
      //   });
      //   apolloClient.readQuery({
      //     query: GET_TODOS
      //   });
      // }
      // console.log(prevTodos);
      // apolloClient.writeQuery({
      //   query: GET_TODOS,
      //   data: {
      //     __typename: "Todos",
      //     todos: [
      //       ...(prevTodos?.todos || []),
      //       {
      //         __typename: "Todo",
      //         id: Math.floor(Math.random() * 1000),
      //         completed: false,
      //         ...data
      //       }
      //     ]
      //   }
      // });
    });
  };
};
