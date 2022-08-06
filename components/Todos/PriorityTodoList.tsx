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
    <View borderRadius="lg" backgroundColor="white">
      <View px="2">
        {todoList.map((item, key) => (
          <View key={key}>
            <TodoItem
              data={item}
              onRemoveTodo={onRemoveTodo}
              key={item.id}
              simultaneousHandlers={simultaneousHandlers}
            />
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
