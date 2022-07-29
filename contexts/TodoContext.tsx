import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { TodoTypes, TodoTypeTitle } from "../interfaces/todo.interface";

interface TodoContextProps {
  todoTypes: TodoTypes[];
  selectedType: string;
  setSelectedType: Dispatch<SetStateAction<TodoTypeTitle>>;
}

export const TodoContext = createContext({} as TodoContextProps);
const TodoContextProvider = ({ ...props }) => {
  const [todoTypes, setTodoTypes] = useState<TodoTypes[]>([]);
  const [selectedType, setSelectedType] = useState<TodoTypeTitle>("All");

  const values: TodoContextProps = {
    todoTypes,
    selectedType,
    setSelectedType,
  };

  useEffect(() => {
    setTodoTypes([
      { title: "All" },
      {
        title: "Personal",
      },
      {
        title: "School",
      },
      {
        title: "Trip",
      },
      {
        title: "Work",
      },
    ]);
  }, []);

  return <TodoContext.Provider value={values} {...props} />;
};

export default TodoContextProvider;
