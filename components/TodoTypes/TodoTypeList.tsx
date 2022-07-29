import { View, Text, FlatList } from "native-base";
import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import TodoTypeItem from "./TodoTypeItem";

const TodoTypeList = () => {
  const { selectedType, todoTypes, setSelectedType } = useContext(TodoContext);
  return (
    <View marginTop="2">
      <Text ml="2" fontSize="20" fontWeight="bold">
        Category
      </Text>
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
      />
    </View>
  );
};

export default TodoTypeList;
