import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
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
    <View
      backgroundColor="#fff"
      my="2"
      py="2"
      px="4"
      mx="2"
      borderRadius="md"
      alignItems="center"
      flexDirection="row"
      style={styles.card}
    >
      <ToggleCheckBox checked={data.status} />
      <View py="2">
        <Text fontSize="18" fontWeight="semibold">
          {data.todo}
        </Text>
        {/* <Text color="gray.400">{mm.format("LLL")}</Text> */}
      </View>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  card: {
    elevation: 2,
  },
});
