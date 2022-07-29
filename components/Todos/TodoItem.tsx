import { Text, View, HStack, Checkbox } from "native-base";
import { TodoItemType } from "../../interfaces/todo.interface";
import React from "react";
import moment from "moment";
import ToggleCheckBox from "./ToggleCheckBox";

type TodoItemProps = {
  data: TodoItemType;
  index: number;
};

const TodoItem = ({ data, index }: TodoItemProps) => {
  const mm = moment(data.date);
  return (
    <HStack
      backgroundColor="#fff"
      my="2"
      py="2"
      px="4"
      borderRadius="md"
      alignItems="center"
    >
      <ToggleCheckBox checked={data.status} />
      <View py="2">
        <Text fontSize="18" fontWeight="semibold">
          {data.todo}
        </Text>
        {/* <Text color="gray.400">{mm.format("LLL")}</Text> */}
      </View>
    </HStack>
  );
};

export default TodoItem;
