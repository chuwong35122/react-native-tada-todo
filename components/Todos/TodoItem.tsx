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
  PanGestureHandlerProps,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

interface TodoItemProps
  extends Pick<PanGestureHandlerProps, "simultaneousHandlers"> {
  data: TodoItemType;
  onRemoveTodo?: (data: TodoItemType) => Promise<void>;
}

const ITEM_HEIGHT = 72;
const MARGIN_BOTTOM = 3;

const TodoItem = ({
  data,
  onRemoveTodo,
  simultaneousHandlers,
}: TodoItemProps) => {
  const { width } = useWindowDimensions();
  const { updateTodoList } = useContext(TodoContext);
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationScreenTypes>>();

  const DELETE_THRESHOLD = -(width * 0.35);

  async function handlePress() {
    await setTodoStatus(data.id, data.priority);
    await updateTodoList();
  }

  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(ITEM_HEIGHT);
  const marginBottom = useSharedValue(MARGIN_BOTTOM);
  const opacity = useSharedValue(1);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < DELETE_THRESHOLD;
      if (shouldBeDismissed) {
        translateX.value = withTiming(-width);
        opacity.value = withTiming(0);
        itemHeight.value = withTiming(0);
        marginBottom.value = withTiming(0, undefined, (isFinished) => {
          if (isFinished && onRemoveTodo) {
            runOnJS(onRemoveTodo)(data);
          }
        });
      } else {
        translateX.value = withSpring(0, { stiffness: 150, mass: 0.6 });
      }
    },
  });

  const reanimatedPanStyle = useAnimatedStyle(() => ({
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
      margin: marginBottom.value,
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={[styles.card, reanimatedItemHeight]}>
      <Animated.View style={reanimatedIconStyle}>
        <View position="absolute" top="6" right="8">
          <Feather name="trash-2" size={26} color="black" />
        </View>
      </Animated.View>
      <PanGestureHandler
        onGestureEvent={panGesture}
        simultaneousHandlers={simultaneousHandlers}
      >
        <Animated.View style={[styles.cardContainer, reanimatedPanStyle]}>
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
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  card: {
    marginBottom: MARGIN_BOTTOM,
    elevation: 1,
  },
  cardContainer: {
    height: ITEM_HEIGHT,
    shadowColor: "#000",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 12,
    paddingHorizontal: 10,
  },
});
