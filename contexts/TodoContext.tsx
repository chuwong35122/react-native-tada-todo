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
  highTodoList: TodoItemType[];
  setHighTodoList: Dispatch<SetStateAction<TodoItemType[]>>;
  medTodoList: TodoItemType[];
  setMedTodoList: Dispatch<SetStateAction<TodoItemType[]>>;
  lowTodoList: TodoItemType[];
  setLowTodoList: Dispatch<SetStateAction<TodoItemType[]>>;
  isTodoUpdate: boolean;
  setIsTodoUpdate: Dispatch<SetStateAction<boolean>>;
}

export const TodoContext = createContext({} as TodoContextProps);
const TodoContextProvider = ({ ...props }) => {
  // const [todoList, setTodoList] = useState<TodoItemType[]>([]);
  const [highTodoList, setHighTodoList] = useState<TodoItemType[]>([]);
  const [medTodoList, setMedTodoList] = useState<TodoItemType[]>([]);
  const [lowTodoList, setLowTodoList] = useState<TodoItemType[]>([]);
  const [isTodoUpdate, setIsTodoUpdate] = useState(true); // used to re-render todoList

  useEffect(() => {
    async function fn() {
      const high = await getAllTodo("@high");
      const med = await getAllTodo("@med");
      const low = await getAllTodo("@low");

      setHighTodoList(high);
      setMedTodoList(med);
      setLowTodoList(low);
    }

    fn();
  }, [isTodoUpdate]);

  const values: TodoContextProps = {
    lowTodoList,
    setLowTodoList,
    medTodoList,
    setMedTodoList,
    highTodoList,
    setHighTodoList,
    isTodoUpdate,
    setIsTodoUpdate,
  };

  return <TodoContext.Provider value={values} {...props} />;
};

export default TodoContextProvider;
