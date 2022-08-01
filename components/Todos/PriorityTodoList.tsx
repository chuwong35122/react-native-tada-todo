import { useWindowDimensions, StyleSheet } from "react-native";
import { Text, View } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import { ColorType } from "native-base/lib/typescript/components/types";
import { PriorityTodoKey, TodoItemType } from "../../interfaces/todo.interface";
import { TodoContext } from "../../contexts/TodoContext";
import TodoItem from "./TodoItem";

type PriorityTodoListProps = {
  priority: PriorityTodoKey;
  title: string;
  bottomLineColor: ColorType;
};

const PriorityTodoList = ({
  priority,
  title,
  bottomLineColor,
}: PriorityTodoListProps) => {
  const { height } = useWindowDimensions();
  const { highTodoList, medTodoList, lowTodoList, isTodoUpdate } =
    useContext(TodoContext);
  const [todoList, setTodoList] = useState<TodoItemType[]>([]);

  useEffect(() => {
    if (priority === "@high") {
      setTodoList(highTodoList);
    } else if (priority === "@med") {
      setTodoList(medTodoList);
    } else if (priority === "@low") {
      setTodoList(lowTodoList);
    }
  }, [isTodoUpdate]);

  return (
    <View mx="4">
      <Text fontSize="lg">{title}</Text>
      {todoList.length > 0 ? (
        <View
          w="full"
          borderRadius="lg"
          my="2"
          backgroundColor="white"
          height={height * 0.4}
          style={styles.card}
          borderBottomColor={bottomLineColor}
          borderBottomWidth="6"
          p="2"
        >
          {todoList.map((item, key) => {
            return <TodoItem data={item} key={key} />;
          })}
        </View>
      ) : (
        <View
          w="full"
          borderRadius="lg"
          my="2"
          backgroundColor="white"
          p="4"
          style={styles.card}
          borderBottomColor={bottomLineColor}
          borderBottomWidth="6"
          flexDir="row"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="xl" color="gray.400">
            There's no To-Do yet
          </Text>
        </View>
      )}
    </View>
  );
};

export default PriorityTodoList;

const styles = StyleSheet.create({
  card: {
    elevation: 0.5,
  },
});
