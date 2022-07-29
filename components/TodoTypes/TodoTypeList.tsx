import { View, Text, FlatList } from "native-base";
import React, { useContext, useState, useEffect } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { TodoTypeTitle } from "../../interfaces/todo.interface";
import TodoTypeItem from "./TodoTypeItem";

const TodoTypeList = () => {
  const [types, setTypes] = useState<TodoTypeTitle[]>([]);
  const { selectedType, todoTypes, setSelectedType } = useContext(TodoContext);

  useEffect(() => {
    const _types = todoTypes.map((each) => each.title);
    _types.splice(0, 0, "All");
    setTypes(_types);
  }, [todoTypes]);

  return (
    <View marginTop="2">
      <Text ml="2" fontSize="20" fontWeight="bold">
        Category
      </Text>
      <FlatList
        data={types}
        renderItem={({ item }) => (
          <TodoTypeItem
            title={item}
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
