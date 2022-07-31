import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { TodoColorName, TodoItemType } from "../interfaces/todo.interface";
import { getAllTodo } from "../utils/todo";

interface TodoContextProps {
  todoList: TodoItemType[];
  setIsTodoUpdate: Dispatch<SetStateAction<boolean>>;
  selectedTodoColor: TodoColorName;
  setSelectedTodoColor: Dispatch<SetStateAction<TodoColorName>>;
}

export const TodoContext = createContext({} as TodoContextProps);
const TodoContextProvider = ({ ...props }) => {
  const [todoList, setTodoList] = useState<TodoItemType[]>([]);
  const [isTodoUpdate, setIsTodoUpdate] = useState(true); // used to re-render todoList
  const [selectedTodoColor, setSelectedTodoColor] =
    useState<TodoColorName>("All");

  useEffect(() => {
    async function fn() {
      const _todoList = await getAllTodo();
      if (_todoList) {
        setTodoList(_todoList);
      }

      return () => {
        setIsTodoUpdate((prev) => !prev);
      };
    }

    fn();
  }, [isTodoUpdate]);

  const values: TodoContextProps = {
    todoList,
    setIsTodoUpdate,
    selectedTodoColor,
    setSelectedTodoColor,
  };

  return <TodoContext.Provider value={values} {...props} />;
};

export default TodoContextProvider;
