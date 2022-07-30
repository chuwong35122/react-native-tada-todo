import { Text, View } from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";
import { TodoItemType } from "../../interfaces/todo.interface";
import React from "react";
import CheckBox from "./CheckBox";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavigationScreenTypes } from "../../screens/navigation.types";

type TodoItemProps = {
  data: TodoItemType;
  index: number;
};

const TodoItem = ({ data, index }: TodoItemProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationScreenTypes>>();

  return (
    <View
      backgroundColor="#fff"
      my="1"
      py="2.5"
      px="4"
      mx="2"
      borderRadius="md"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="row"
      style={styles.card}
    >
      <View flexDir="row" alignItems="center">
        <CheckBox isChecked={data.status} color={data.color} />
        <Text
          fontSize="20"
          textDecorationLine={data.status ? "line-through" : null}
          color={data.status ? "gray.400" : "black"}
        >
          {data.todo}
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.push("ViewTodo", data)}>
        <Feather name="more-vertical" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  card: {
    elevation: 0.5,
  },
});
