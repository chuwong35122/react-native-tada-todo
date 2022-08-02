import { StyleSheet } from "react-native";
import { Text, View } from "native-base";
import React, { useCallback, useContext, useState, useEffect } from "react";
import { PriorityTodoKey, TodoItemType } from "../../interfaces/todo.interface";
import { TodoContext } from "../../contexts/TodoContext";
import TodoItem from "./TodoItem";
import { removeTodoItem } from "../../utils/todo";
import { PanGestureHandlerProps } from "react-native-gesture-handler";

interface PriorityTodoListProps
  extends Pick<PanGestureHandlerProps, "simultaneousHandlers"> {
  priority: PriorityTodoKey;
  title: string;
}

const PriorityTodoList = ({
  priority,
  title,
  simultaneousHandlers,
}: PriorityTodoListProps) => {
  const { highTodoList, medTodoList, lowTodoList, updateTodoList } =
    useContext(TodoContext);
  const [todoList, setTodoList] = useState<TodoItemType[]>([]);

  const onRemoveTodo = useCallback(async (data: TodoItemType) => {
    await removeTodoItem(data.id, data.priority);
    updateTodoList(data.priority);
  }, []);

  useEffect(() => {
    if (priority === "@high") {
      setTodoList(highTodoList);
    } else if (priority === "@med") {
      setTodoList(medTodoList);
    } else if (priority === "@low") {
      setTodoList(lowTodoList);
    }
  }, [highTodoList, medTodoList, lowTodoList]);

  return (
    <View
      mx="4"
      borderRadius="lg"
      my="2"
      backgroundColor="white"
      style={styles.card}
    >
      <View
        flexDir="row"
        justifyContent="space-between"
        alignItems="center"
        bgColor="black"
        borderTopRadius="lg"
        p="3"
      >
        <Text fontSize="md" color="white" fontFamily="Roboto_500Medium">
          {title}
        </Text>
        <Text fontFamily="Roboto_300Light" color="white">
          {todoList.length} items
        </Text>
      </View>
      {todoList.length > 0 ? (
        <View pl="1">
          {todoList.map((item, key) => (
            <View>
              <TodoItem
                data={item}
                onRemoveTodo={onRemoveTodo}
                key={item.id}
                simultaneousHandlers={simultaneousHandlers}
              />
              {key !== todoList.length - 1 && (
                <View w="full" px="3">
                  <View w="full" bgColor="light.200" style={{ height: 1 }} />
                </View>
              )}
            </View>
          ))}
        </View>
      ) : (
        <View
          alignItems="center"
          justifyContent="center"
          borderLeftColor="gray.200"
          borderLeftWidth="4"
          m="2"
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
    elevation: 1,
  },
});
