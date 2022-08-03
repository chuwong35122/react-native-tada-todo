import React, { useContext, useRef } from "react";
import { Fab, Text, View, IconButton } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationScreenTypes } from "./navigation.types";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import PriorityTodoList from "../components/Todos/PriorityTodoList";
import Animated, {
  ZoomInLeft,
  ZoomInRight,
  ZoomIn,
} from "react-native-reanimated";
import { TodoContext } from "./../contexts/TodoContext";
import EmptyTodoView from "../components/Todos/EmptyTodoView";

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationScreenTypes>>();

  const scrollViewRef = useRef(null);
  const { highTodoList, medTodoList, lowTodoList } = useContext(TodoContext);

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 14 }}>
      <ScrollView ref={scrollViewRef}>
        <View
          w="full"
          flexDir="row"
          justifyContent="space-between"
          alignItems="center"
          px="4"
          mb="4"
        >
          <Text fontSize="3xl" style={{ fontFamily: "Roboto_500Medium" }}>
            My To-Do List
          </Text>
          <View>
            <IconButton
              variant="outline"
              _icon={{
                as: AntDesign,
                name: "setting",
                size: "lg",
                color: "white",
              }}
              p="1"
              rounded="full"
              bgColor="black"
              borderColor="black"
              _pressed={{
                backgroundColor: "gray.700",
              }}
              onPress={() => navigation.navigate("Setting")}
            />
          </View>
        </View>
        {highTodoList.length === 0 &&
        medTodoList.length === 0 &&
        lowTodoList.length === 0 ? (
          <EmptyTodoView />
        ) : (
          <View>
            <Animated.View entering={ZoomIn.springify().stiffness(60)}>
              <PriorityTodoList
                priority="@high"
                title="HIGHEST PRIORITY"
                simultaneousHandlers={scrollViewRef}
              />
            </Animated.View>
            <Animated.View
              entering={ZoomIn.springify().delay(250).stiffness(60)}
            >
              <PriorityTodoList
                priority="@med"
                title="MEDIUM PRIORITY"
                simultaneousHandlers={scrollViewRef}
              />
            </Animated.View>
            <Animated.View
              entering={ZoomIn.springify().delay(500).stiffness(60)}
            >
              <PriorityTodoList
                priority="@low"
                title="LOWEST PRIORITY"
                simultaneousHandlers={scrollViewRef}
              />
            </Animated.View>
          </View>
        )}
      </ScrollView>
      <Fab
        backgroundColor="white"
        size="lg"
        icon={<AntDesign name="plus" size={24} color="black" />}
        renderInPortal={false}
        onPress={() => navigation.push("CreateTodo")}
        position="absolute"
        style={{ elevation: 3 }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
