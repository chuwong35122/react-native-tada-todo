import { Pressable, Text, View } from "native-base";
import { StyleSheet, useWindowDimensions } from "react-native";
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
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type TodoItemProps = {
  data: TodoItemType;
  onRemoveTodo: (data: TodoItemType) => Promise<void>;
};

const TodoItem = ({ data, onRemoveTodo }: TodoItemProps) => {
  const { width } = useWindowDimensions();
  const { setIsTodoUpdate } = useContext(TodoContext);
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationScreenTypes>>();

  const DELETE_THRESHOLD = -(width * 0.35);
  const ITEM_HEIGHT = 72;

  async function handlePress() {
    await setTodoStatus(data.id, data.priority);
    setIsTodoUpdate((prev) => !prev);
  }

  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(ITEM_HEIGHT);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < DELETE_THRESHOLD;
      if (shouldBeDismissed) {
        translateX.value = withTiming(-width);
        itemHeight.value = withTiming(0, undefined, (isFinished) => {
          if (isFinished && onRemoveTodo) {
            runOnJS(onRemoveTodo)(data);
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const reanimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  const reanimatedIconStyle = useAnimatedStyle(() => {
    const opacity = withTiming(translateX.value < DELETE_THRESHOLD ? 1 : 0);
    return { opacity };
  });

  const reanimatedItemHeight = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
    };
  });

  return (
    <View>
      <Animated.View style={[reanimatedIconStyle]}>
        <View
          justifyContent="flex-end"
          alignItems="center"
          position="absolute"
          right="4"
          top="6"
        >
          <Feather name="trash-2" size={28} color="red" />
        </View>
      </Animated.View>
      <PanGestureHandler onGestureEvent={panGesture}>
        <Animated.View style={[reanimatedStyle, reanimatedItemHeight]}>
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
            {/* <View w="14">
            <TouchableOpacity onPress={() => navigation.push("ViewTodo", data)}>
              <Feather name="more-vertical" size={24} color="black" />
            </TouchableOpacity>
          </View> */}
          </View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  card: {
    elevation: 1,
  },
});
