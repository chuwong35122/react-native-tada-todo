import AsyncStorage from "@react-native-async-storage/async-storage";
import { TodoItemType } from "../interfaces/todo.interface";

export async function getAllTodo() {
  const result = await AsyncStorage.getItem("@todo");
  if (result) {
    return JSON.parse(result) as TodoItemType[];
  }

  return [] as TodoItemType[];
}

export async function saveTodo(todoList: TodoItemType[]) {
  await AsyncStorage.setItem("@todo", JSON.stringify(todoList));
}

export async function addTodo(newTodo: TodoItemType) {
  const todoList = await getAllTodo();
  todoList.splice(0, 0, newTodo);
  saveTodo(todoList);

  return todoList;
}
