import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Text,
  View,
  Button,
  AlertDialog,
  VStack,
  Input,
  HStack,
} from "native-base";
import React, { useState, useRef, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { clearAllTodo } from "../utils/todo";
import { TodoContext } from "./../contexts/TodoContext";
import { StackNavigationScreenTypes } from "./navigation.types";

const SettingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationScreenTypes>>();

  const { updateTodoList } = useContext(TodoContext);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    days: 0,
  });
  const cancelRef = useRef(null);

  function onClose() {
    setIsAlertOpen(false);
  }

  // clear all To-Do
  async function onPressDeleteTodo() {
    await clearAllTodo();
    await updateTodoList("@high");
    await updateTodoList("@med");
    await updateTodoList("@low");
    onClose();
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Alert confirmation */}
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isAlertOpen}
        onClose={onClose}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Clear all To-Do</AlertDialog.Header>
          <AlertDialog.Body>
            This action will clear all To-Do list in every priority you had.
            Deleted data can not be recovered.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={4}>
              <Button
                variant="unstyled"
                onPress={onClose}
                ref={cancelRef}
                backgroundColor="black"
                _text={{ color: "white" }}
              >
                Cancel
              </Button>
              <Button
                variant="ghost"
                onPress={onClose}
                _text={{ color: "rose.600" }}
                _press={{ backgroundColor: "gray.200" }}
                onPress={onPressDeleteTodo}
              >
                Delete
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
      <VStack px="4" space={3}>
        <Text fontSize="3xl" fontFamily="Roboto_500Medium">
          Settings
        </Text>
        {/* Settings */}
        <View>
          {/* Name */}
          <HStack justifyContent="space-between" alignItems="flex-end">
            <Text fontSize="lg">Display name</Text>
            <Input
              variant="underlined"
              size="md"
              placeholder="My Fabulous Name"
              width="56"
              textAlign="center"
              pb="0"
              fontSize="md"
              _focus={{
                borderColor: "black",
              }}
            />
          </HStack>
          <Text color="gray.400" fontSize="xs">
            Change your display name.
          </Text>
        </View>
        <View>
          {/* Clearing Days Gap */}
          <HStack justifyContent="space-between" alignItems="flex-end">
            <Text fontSize="lg">Clearing Days Gap</Text>
            <Input
              variant="underlined"
              size="md"
              placeholder="3"
              w="16"
              textAlign="center"
              pb="0"
              fontSize="lg"
              keyboardType="numeric"
              _focus={{
                borderColor: "black",
              }}
            />
          </HStack>
          <Text color="gray.400" fontSize="xs">
            Number of days before deleting finished To-Do.
          </Text>
        </View>
      </VStack>
      {/* Clear Storage Button */}
      <VStack space={4} px="4" position="absolute" bottom="10" w="full">
        <Button
          size="lg"
          variant="outline"
          _text={{
            color: "black",
          }}
          _pressed={{
            backgroundColor: "gray.200",
            borderColor: "gray.300",
          }}
          _focus={{
            backgroundColor: "gray.200",
          }}
          onPress={() => setIsAlertOpen(true)}
        >
          CLEAR ALL TO-DO
        </Button>
        <Button
          size="lg"
          variant="solid"
          bgColor="black"
          onPress={() => navigation.goBack()}
        >
          Go Back
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default SettingScreen;
