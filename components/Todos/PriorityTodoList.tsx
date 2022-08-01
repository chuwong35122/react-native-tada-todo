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
    <View
      mx="4"
      borderRadius="lg"
      my="2"
      backgroundColor="white"
      maxHeight={height * 0.4}
      style={styles.card}
      // borderLeftColor={bottomLineColor}
      // borderLeftWidth="4"
      p="2"
    >
      <View
        flexDir="row"
        justifyContent="space-between"
        alignItems="center"
        mb="2"
      >
        <Text fontSize="md" fontFamily="Roboto_400Regular">
          {title}
        </Text>
        <Text fontFamily="Roboto_300Light" color="gray.600">
          {todoList.length} items
        </Text>
      </View>
      {todoList.length > 0 ? (
        <View borderLeftColor={bottomLineColor} borderLeftWidth="4" pl="1">
          {todoList.map((item, key) => {
            return <TodoItem data={item} key={key} />;
          })}
        </View>
      ) : (
        <View
          alignItems="center"
          justifyContent="center"
          borderLeftColor={bottomLineColor}
          borderLeftWidth="4"
        >
          <Text
            fontSize="md"
            color="gray.400"
            fontFamily="Roboto_300Light"
            my="4"
          >
            Yep, it is empty...
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
