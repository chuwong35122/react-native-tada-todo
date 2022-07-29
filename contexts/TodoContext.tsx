import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

export type TodoTypes = "personal" | string;
interface TodoContextProps {
  selectedType: TodoTypes;
  setSelectedType: Dispatch<SetStateAction<TodoTypes>>;
}

export const TodoContext = createContext({} as TodoContextProps);
const TodoContextProvider = ({ ...props }) => {
  const [selectedType, setSelectedType] = useState<TodoTypes>("personal");

  const values: TodoContextProps = {
    selectedType,
    setSelectedType,
  };

  return <TodoContext.Provider value={values} {...props} />;
};

export default TodoContextProvider;
