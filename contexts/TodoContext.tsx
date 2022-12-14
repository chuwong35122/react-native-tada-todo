import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { TodoItemType } from "../interfaces/todo.interface";
import { getAllTodo, initializeTodoList } from "../utils/todo";

interface TodoContextProps {
  todoList: TodoItemType[];
  setTodoList: Dispatch<SetStateAction<TodoItemType[]>>;
  todoLoading: boolean;
  updateTodoList: () => Promise<void>;
}

export const TodoContext = createContext({} as TodoContextProps);
const TodoContextProvider = ({ ...props }) => {
  const [todoList, setTodoList] = useState<TodoItemType[]>([]);
  const [todoLoading, setTodoLoading] = useState(false);

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
      setTodoLoading(true);
      if (!canceled) {
        await initializeTodoList();
        await updateTodoList();
        setTodoLoading(false);
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
    todoLoading,
  };

  return <TodoContext.Provider value={values} {...props} />;
};

export default TodoContextProvider;
