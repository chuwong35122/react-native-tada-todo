import { Pressable, Text, View } from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";
import { TodoItemType } from "../../interfaces/todo.interface";
import React, { useContext } from "react";
import CheckBox from "./CheckBox";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavigationScreenTypes } from "../../screens/navigation.types";
import { TodoContext } from "../../contexts/TodoContext";
import { setTodoStatus } from "../../utils/todo";

type TodoItemProps = {
  data: TodoItemType;
};

const TodoItem = ({ data }: TodoItemProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationScreenTypes>>();

  const { setIsTodoUpdate } = useContext(TodoContext);
  async function handlePress() {
    await setTodoStatus(data.id);
    setIsTodoUpdate((prev) => !prev);
  }

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
      <Pressable
        flexDir="row"
        alignItems="center"
        onPress={handlePress}
        width="96%"
      >
        <CheckBox isChecked={data.status} color={data.color} />
        <Text
          fontSize="20"
          textDecorationLine={data.status ? "line-through" : null}
          color={data.status ? "gray.400" : "black"}
        >
          {data.todo}
        </Text>
      </Pressable>
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
