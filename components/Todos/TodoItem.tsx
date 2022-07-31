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
import moment from "moment";

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
      px="4"
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
        py="1.5"
      >
        <CheckBox isChecked={data.status} color={data.color} />
        <View width="84%">
          <Text
            fontSize="20"
            textDecorationLine={data.status ? "line-through" : null}
            color={data.status ? "gray.400" : "black"}
            numberOfLines={1}
          >
            {data.todo}
          </Text>
          <Text fontSize="xs" color="gray.400">
            {moment(data.date).format("LLL")}
          </Text>
        </View>
      </Pressable>
      <View w="14">
        <TouchableOpacity onPress={() => navigation.push("ViewTodo", data)}>
          <Feather name="more-vertical" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  card: {
    elevation: 0.5,
  },
});
