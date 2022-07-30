import { FlatList, Text, View } from "native-base";
import React from "react";
import { TodoItemType } from "../../interfaces/todo.interface";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const data: TodoItemType[] = [
    {
      todo: "1",
      date: new Date(),
      status: true,
      color: "blue",
    },
    {
      todo: "2",
      date: new Date(),
      status: false,
      color: "amber",
    },
    {
      todo: "3",
      date: new Date(),
      status: false,
      color: "black",
    },
  ];
  return (
    <View>
      <Text fontSize="20" fontWeight="bold" mb="2">
        My Todos
      </Text>
      <FlatList
        data={data}
        renderItem={({ item, index }) => <TodoItem data={item} index={index} />}
      />
    </View>
  );
};

export default TodoList;
