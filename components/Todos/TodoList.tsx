import { FlatList, View, Text, ScrollView } from "native-base";
import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "./../../contexts/TodoContext";

const TodoList = () => {
  const { todoList } = useContext(TodoContext);

  return (
    <View flex="1" p="2">
      {todoList.length > 0 ? (
        <FlatList
          data={todoList}
          renderItem={({ item }) => <TodoItem data={item} />}
          keyExtractor={(_, index) => index.toString()}
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
