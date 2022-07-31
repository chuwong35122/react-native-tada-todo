import { FlatList, View } from "native-base";
import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "./../../contexts/TodoContext";

const TodoList = () => {
  const { todoList } = useContext(TodoContext);

  return (
    <View>
      <FlatList
        data={todoList}
        renderItem={({ item }) => <TodoItem data={item} />}
      />
    </View>
  );
};

export default TodoList;
