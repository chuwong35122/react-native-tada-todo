import { Text, View, FlatList } from "native-base";
import React, { useContext } from "react";
import { TodoContext, TodoTypes } from "../../contexts/TodoContext";
import TodoTypeItem from "./TodoTypeItem";

const TodoTypeList = () => {
  const { selectedType, todoTypes, setSelectedType } = useContext(TodoContext);
  return (
    <FlatList
      data={todoTypes}
      renderItem={({ item }) => (
        <TodoTypeItem
          title={item.title}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
      )}
      horizontal
      keyExtractor={(_, key) => key.toString()}
      showsHorizontalScrollIndicator={false}
      marginTop="2"
    />
  );
};

export default TodoTypeList;
