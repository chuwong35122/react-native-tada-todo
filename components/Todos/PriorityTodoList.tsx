import { View } from "native-base";
import React, { useCallback, useContext, useState, useEffect } from "react";
import { TodoItemType } from "../../interfaces/todo.interface";
import { TodoContext } from "../../contexts/TodoContext";
import TodoItem from "./TodoItem";
import { removeTodoItem } from "../../utils/todo";
import { PanGestureHandlerProps } from "react-native-gesture-handler";
import { Audio } from "expo-av";

interface PriorityTodoListProps
  extends Pick<PanGestureHandlerProps, "simultaneousHandlers"> {}

const PriorityTodoList = ({ simultaneousHandlers }: PriorityTodoListProps) => {
  const { todoList, updateTodoList } = useContext(TodoContext);
  const [sound, setSound] = useState<Audio.Sound>();

  const onRemoveTodo = useCallback(async (data: TodoItemType) => {
    await removeTodoItem(data.id, data.priority);
    updateTodoList();
  }, []);

  const playSfx = useCallback(async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/sounds/finish.mp3"),
      { volume: 0.05 }
    );
    setSound(sound);
    await sound.playAsync();
  }, []);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

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
              playSfx={playSfx}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default PriorityTodoList;
