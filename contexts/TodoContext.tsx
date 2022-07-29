import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { TodoTypes, TodoTypeTitle } from "../interfaces/todo.interface";
import { AppTodoTypes } from "./../components/constants/todoTypes";

interface TodoContextProps {
  todoTypes: TodoTypes[];
  selectedType: TodoTypeTitle;
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
    setTodoTypes(AppTodoTypes);
  }, []);

  return <TodoContext.Provider value={values} {...props} />;
};

export default TodoContextProvider;
