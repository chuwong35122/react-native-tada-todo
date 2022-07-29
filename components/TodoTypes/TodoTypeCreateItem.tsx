import { View, Text, Center, Pressable } from "native-base";
import React from "react";
import { TodoTypes, TodoTypeTitle } from "../../interfaces/todo.interface";

type TodoTypeCreateItemProps = {
  type: TodoTypes;
  selectedType: TodoTypeTitle;
  setSelectedType: React.Dispatch<React.SetStateAction<TodoTypeTitle>>;
};

const TodoTypeCreateItem = ({
  type,
  selectedType,
  setSelectedType,
}: TodoTypeCreateItemProps) => {
  return (
    <Pressable
      width="20"
      height="20"
      borderRadius="md"
      bgColor={selectedType === type.title ? "blue.500" : "gray.200"}
      alignItems="center"
      justifyContent="center"
      flex={1}
      m="1"
      onPress={() => setSelectedType(type.title)}
    >
      <Text fontSize="3xl">{type.icon}</Text>
      <Text
        fontSize="lg"
        color={selectedType === type.title ? "white" : "black"}
      >
        {type.title}
      </Text>
    </Pressable>
  );
};

export default TodoTypeCreateItem;
