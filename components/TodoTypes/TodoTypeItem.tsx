import { Text, Pressable } from "native-base";
import React, { Dispatch, SetStateAction } from "react";
import { TodoTypeTitle } from "../../interfaces/todo.interface";

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
  function renderBackgroundColor() {
    if (title === selectedType && title === "All") {
      return "amber.400";
    } else if (title === selectedType) {
      return "blue.500";
    }

    return "gray.200";
  }

  return (
    <Pressable
      padding="2"
      width="24"
      height="24"
      borderRadius="md"
      bgColor={renderBackgroundColor()}
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
