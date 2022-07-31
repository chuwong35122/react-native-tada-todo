import { FlatList, View, Text } from "native-base";
import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "./../../contexts/TodoContext";

const TodoList = () => {
  const { todoList } = useContext(TodoContext);

  return (
    <View>
      {todoList.length > 0 ? (
        <FlatList
          data={todoList}
          renderItem={({ item }) => <TodoItem data={item} />}
        />
      ) : (
        <View alignItems="center" justifyContent="center" height="56">
          <Text fontSize="2xl" color="gray.400">
            Add your first To-Do now!
          </Text>
        </View>
      )}
    </View>
  );
};

export default TodoList;
