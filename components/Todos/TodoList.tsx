import { FlatList, Text, View } from "native-base";
import React from "react";
import { TodoItemType } from "../../interfaces/todo.interface";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const data: TodoItemType[] = [
    {
      todo: "1",
      date: new Date(),
      status: false,
      type: "Personal",
    },
    {
      todo: "2",
      date: new Date(),
      status: false,
      type: "Personal",
    },
    {
      todo: "3",
      date: new Date(),
      status: false,
      type: "Trip",
    },
  ];
  return (
    <View>
      <Text fontSize="20" fontWeight="bold">
        My Todos
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TodoItem todo={item.todo} date={item.date} />
        )}
      />
    </View>
  );
};

export default TodoList;
