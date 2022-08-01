import React from "react";
import { Fab, Text, Button, ScrollView } from "native-base";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationScreenTypes } from "./navigation.types";
import { AntDesign } from "@expo/vector-icons";
import { clearStorage } from "../utils/todo";
import { SafeAreaView } from "react-native-safe-area-context";
import PriorityTodoList from "../components/Todos/PriorityTodoList";
import Animated, { ZoomInLeft, ZoomInRight } from "react-native-reanimated";

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationScreenTypes>>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Text fontSize="20" ml="2" style={{ fontFamily: "Roboto_500Medium" }}>
          My Ta-Da To-Do
        </Text>
        <Animated.View
          entering={ZoomInLeft.delay(300).springify().stiffness(60)}
        >
          <PriorityTodoList priority="@high" title="HIGHEST PRIORITY" />
        </Animated.View>
        <Animated.View
          entering={ZoomInRight.delay(550).springify().stiffness(60)}
        >
          <PriorityTodoList priority="@med" title="MEDIUM PRIORITY" />
        </Animated.View>
        <Animated.View
          entering={ZoomInLeft.delay(750).springify().stiffness(60)}
        >
          <PriorityTodoList priority="@low" title="LOWEST PRIORITY" />
        </Animated.View>
      </ScrollView>
      <Fab
        backgroundColor="blue.500"
        size="lg"
        icon={<AntDesign name="plus" size={24} color="white" />}
        renderInPortal={false}
        onPress={() => navigation.push("CreateTodo")}
        position="absolute"
      />

      <Button onPress={clearStorage} position="absolute" bottom="0">
        Clear
      </Button>
    </SafeAreaView>
  );
};

export default HomeScreen;
