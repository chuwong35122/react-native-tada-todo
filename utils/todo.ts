import AsyncStorage from "@react-native-async-storage/async-storage";
import { PriorityTodoKey, TodoItemType } from "../interfaces/todo.interface";
import moment from "moment";

export async function getAllTodo(key: PriorityTodoKey) {
  const result = await AsyncStorage.getItem(key);
  if (result) {
    return JSON.parse(result) as TodoItemType[];
  }

  return [] as TodoItemType[];
}

export async function saveTodo(todoList: TodoItemType[], key: PriorityTodoKey) {
  await AsyncStorage.setItem(key, JSON.stringify(todoList));
}

export async function addTodo(newTodo: TodoItemType, key: PriorityTodoKey) {
  const todoList = await getAllTodo(key);
  todoList.splice(0, 0, newTodo);
  saveTodo(todoList, key);

  return todoList;
}

export async function setTodoStatus(id: string, key: PriorityTodoKey) {
  const todoList = await getAllTodo(key);
  const index = todoList.findIndex((todo) => todo.id === id);

  if (index === -1) {
    return;
  }

  const _status = todoList[index].status;
  todoList[index].status = !_status;
  await saveTodo(todoList, key);

  return todoList[index];
}

export async function removeTodoItem(id: string, key: PriorityTodoKey) {
  const todoList = await getAllTodo(key);
  const filtered = todoList.filter((todo) => todo.id !== id);
  await saveTodo(filtered, key);

  return filtered;
}

/**
 * Filter finished todo item with age > 3 days to save storage space.
 *  */
export async function initializeTodoList() {
  const now = moment();
  const highs = await getAllTodo("@high");
  const meds = await getAllTodo("@med");

  const filteredHighs = highs.filter(
    (hi) => hi.status === true && moment(hi.date).diff(now, "days") < 3
  );
  const filteredMeds = meds.filter(
    (me) => me.status === true && moment(me.date).diff(now, "day") < 3
  );

  await saveTodo(filteredHighs, "@high");
  await saveTodo(filteredMeds, "@med");
}
