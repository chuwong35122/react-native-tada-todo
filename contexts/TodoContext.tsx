import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

export type TodoTypeTitle = "Personal" | "School" | "Trip" | "Work";
export type TodoTypes = {
  title: TodoTypeTitle;
};
interface TodoContextProps {
  todoTypes: TodoTypes[];
  selectedType: string;
  setSelectedType: Dispatch<SetStateAction<TodoTypeTitle>>;
}

export const TodoContext = createContext({} as TodoContextProps);
const TodoContextProvider = ({ ...props }) => {
  const [todoTypes, setTodoTypes] = useState<TodoTypes[]>([]);
  const [selectedType, setSelectedType] = useState<TodoTypeTitle>("Personal");

  const values: TodoContextProps = {
    todoTypes,
    selectedType,
    setSelectedType,
  };

  useEffect(() => {
    setTodoTypes([
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
