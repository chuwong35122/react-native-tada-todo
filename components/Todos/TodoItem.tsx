import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { TodoItemType } from "../../interfaces/todo.interface";
import React from "react";
import moment from "moment";
import CheckBox from "./CheckBox";

type TodoItemProps = {
  data: TodoItemType;
  index: number;
};

const TodoItem = ({ data, index }: TodoItemProps) => {
  const mm = moment(data.date);
  return (
    <View
      backgroundColor="#fff"
      my="1"
      py="1"
      px="4"
      mx="2"
      borderRadius="md"
      alignItems="center"
      flexDirection="row"
      style={styles.card}
    >
      <CheckBox isChecked={data.status} />
      <View py="2">
        <Text
          fontSize="20"
          textDecorationLine={data.status ? "line-through" : null}
          color={data.status ? "gray.400" : "black"}
        >
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
