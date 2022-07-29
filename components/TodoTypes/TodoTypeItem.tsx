import { Text, Pressable } from "native-base";
import React, { Dispatch, SetStateAction } from "react";
import { TodoTypeTitle } from "../../contexts/TodoContext";

type TodoTypeItemProps = {
  title: TodoTypeTitle;
  selectedType: string;
  setSelectedType: Dispatch<SetStateAction<TodoTypeTitle>>;
};

const TodoTypeItem = ({
  title,
  selectedType,
  setSelectedType,
}: TodoTypeItemProps) => {
  return (
    <Pressable
      padding="2"
      width="24"
      height="24"
      borderRadius="md"
      bgColor={title === selectedType ? "blue.500" : "gray.200"}
      display="flex"
      justifyContent="center"
      alignItems="center"
      m="1"
      onPress={() => setSelectedType(title)}
    >
      <Text
        fontSize="md"
        fontWeight="semibold"
        color={title === selectedType ? "white" : "black"}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default TodoTypeItem;
