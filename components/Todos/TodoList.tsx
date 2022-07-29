import { FlatList, Text, View } from "native-base";
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const data = [
    {
      todo: "1",
      date: new Date(),
    },
    {
      todo: "2",
      date: new Date(),
    },
    {
      todo: "3",
      date: new Date(),
    },
  ];
  return (
    <View>
      <Text fontSize="24" fontWeight="bold">
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
