import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { PriorityTodoKey, TodoItemType } from "../interfaces/todo.interface";
import { getAllTodo } from "../utils/todo";

interface TodoContextProps {
  highTodoList: TodoItemType[];
  setHighTodoList: Dispatch<SetStateAction<TodoItemType[]>>;
  medTodoList: TodoItemType[];
  setMedTodoList: Dispatch<SetStateAction<TodoItemType[]>>;
  lowTodoList: TodoItemType[];
  setLowTodoList: Dispatch<SetStateAction<TodoItemType[]>>;
  updateTodoList: (key: PriorityTodoKey) => Promise<void>;
}

export const TodoContext = createContext({} as TodoContextProps);
const TodoContextProvider = ({ ...props }) => {
  const [highTodoList, setHighTodoList] = useState<TodoItemType[]>([]);
  const [medTodoList, setMedTodoList] = useState<TodoItemType[]>([]);
  const [lowTodoList, setLowTodoList] = useState<TodoItemType[]>([]);

  async function updateTodoList(key: PriorityTodoKey) {
    if (key === "@high") {
      const high = await getAllTodo("@high");
      setHighTodoList(high);
    } else if (key === "@med") {
      const med = await getAllTodo("@med");
      setMedTodoList(med);
    } else if (key === "@low") {
      const low = await getAllTodo("@low");
      setLowTodoList(low);
    }
  }
  // useEffect that get all data once renders
  useEffect(() => {
    async function fn() {
      await updateTodoList("@high");
      await updateTodoList("@med");
      await updateTodoList("@low");
    }

    fn();
  }, []);

  const values: TodoContextProps = {
    lowTodoList,
    setLowTodoList,
    medTodoList,
    setMedTodoList,
    highTodoList,
    setHighTodoList,
    updateTodoList,
  };

  return <TodoContext.Provider value={values} {...props} />;
};

export default TodoContextProvider;
