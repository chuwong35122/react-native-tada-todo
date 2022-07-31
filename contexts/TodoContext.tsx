import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import useAsyncEffect from "../hooks/useAsyncEffect";
import { TodoItemType } from "../interfaces/todo.interface";
import { getAllTodo } from "../utils/todo";

interface TodoContextProps {
  todoList: TodoItemType[];
  setTodoLength: Dispatch<SetStateAction<number>>;
}

export const TodoContext = createContext({} as TodoContextProps);
const TodoContextProvider = ({ ...props }) => {
  const [todoList, setTodoList] = useState<TodoItemType[]>([]);
  const [todoLength, setTodoLength] = useState(0); // used to re-render todoList

  useAsyncEffect(async () => {
    const _todoList = await getAllTodo();
    if (_todoList) {
      setTodoList(_todoList);
    }
  }, [todoLength]);

  const values: TodoContextProps = {
    todoList,
    setTodoLength,
  };

  return <TodoContext.Provider value={values} {...props} />;
};

export default TodoContextProvider;
