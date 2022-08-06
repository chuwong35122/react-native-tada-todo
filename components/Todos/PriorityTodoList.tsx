import { StyleSheet } from "react-native";
import { Text, View } from "native-base";
import React, { useCallback, useContext } from "react";
import { TodoItemType } from "../../interfaces/todo.interface";
import { TodoContext } from "../../contexts/TodoContext";
import TodoItem from "./TodoItem";
import { removeTodoItem } from "../../utils/todo";
import { PanGestureHandlerProps } from "react-native-gesture-handler";

interface PriorityTodoListProps
  extends Pick<PanGestureHandlerProps, "simultaneousHandlers"> {}

const PriorityTodoList = ({ simultaneousHandlers }: PriorityTodoListProps) => {
  const { todoList, updateTodoList } = useContext(TodoContext);

  const onRemoveTodo = useCallback(async (data: TodoItemType) => {
    await removeTodoItem(data.id, data.priority);
    updateTodoList();
  }, []);

  return (
    <View
      // mx="4"
      borderRadius="lg"
      my="2"
      backgroundColor="white"
      // style={styles.card}
    >
      {/* <View
        flexDir="row"
        justifyContent="space-between"
        alignItems="center"
        bgColor="coolGray.200"
        borderTopRadius="lg"
        p="3"
      >
        <Text fontFamily="Roboto_300Light">{todoList.length} items</Text>
      </View> */}

      <View pl="1">
        {todoList.map((item, key) => (
          <View key={key}>
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
    </View>
  );
};

export default PriorityTodoList;

const styles = StyleSheet.create({
  card: {
    elevation: 1,
  },
});
