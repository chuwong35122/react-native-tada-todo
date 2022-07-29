import { FlatList, View } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import { TodoTypeTitle } from "../../interfaces/todo.interface";
import { TodoContext } from "./../../contexts/TodoContext";
import TodoTypeCreateItem from "./TodoTypeCreateItem";

const TodoTypeCreateList = () => {
  const { todoTypes, selectedType, setSelectedType } = useContext(TodoContext);
  const [type, setType] = useState<TodoTypeTitle>("Personal");

  useEffect(() => {
    if (selectedType === "All") {
      setType("Personal");
    } else {
      setType(selectedType);
    }
  }, [selectedType]);
  return (
    <View>
      <FlatList
        data={todoTypes}
        renderItem={({ item }) => (
          <TodoTypeCreateItem
            type={item}
            selectedType={type}
            setSelectedType={setSelectedType}
          />
        )}
        keyExtractor={(_, id) => id.toString()}
        numColumns={4}
      />
    </View>
  );
};

export default TodoTypeCreateList;
