import { FlatList, Text, View } from "native-base";
import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "./../../contexts/TodoContext";

const TodoList = () => {
  const { todoList } = useContext(TodoContext);

  return (
    <View>
      <Text fontSize="20" fontWeight="bold" mb="2">
        My Todos
      </Text>
      <FlatList
        data={todoList}
        renderItem={({ item, index }) => <TodoItem data={item} index={index} />}
      />
    </View>
  );
};

export default TodoList;
