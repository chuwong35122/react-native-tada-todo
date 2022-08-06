import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { TodoItemType } from "../interfaces/todo.interface";
import { getAllTodo } from "../utils/todo";

interface TodoContextProps {
  todoList: TodoItemType[];
  setTodoList: Dispatch<SetStateAction<TodoItemType[]>>;
  updateTodoList: () => Promise<void>;
}

export const TodoContext = createContext({} as TodoContextProps);
const TodoContextProvider = ({ ...props }) => {
  const [todoList, setTodoList] = useState<TodoItemType[]>([]);

  async function updateTodoList() {
    const _todoList: TodoItemType[] = [];
    const high = await getAllTodo("@high");
    const med = await getAllTodo("@med");

    _todoList.push(...high);
    _todoList.push(...med);
    setTodoList(_todoList);
  }
  // useEffect that get all data once renders
  useEffect(() => {
    let canceled = false;
    async function fn() {
      if (canceled) {
        await updateTodoList();
      }
    }

    fn();

    return () => {
      canceled = true;
    };
  }, []);

  const values: TodoContextProps = {
    todoList,
    setTodoList,
    updateTodoList,
  };

  return <TodoContext.Provider value={values} {...props} />;
};

export default TodoContextProvider;
