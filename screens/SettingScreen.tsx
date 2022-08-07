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
  useToast,
  Box,
  Select,
  CheckIcon,
} from "native-base";
import React, { useState, useRef, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { clearAllTodo } from "../utils/todo";
import { TodoContext } from "./../contexts/TodoContext";
import { StackNavigationScreenTypes } from "./navigation.types";
import LottieView from "lottie-react-native";

const SettingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationScreenTypes>>();

  const { updateTodoList } = useContext(TodoContext);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const cancelRef = useRef(null);

  function onClose() {
    setIsAlertOpen(false);
  }

  // clear all To-Do
  async function onPressDeleteTodo() {
    await clearAllTodo();
    updateTodoList();
    showToast();
    onClose();
  }

  const toast = useToast();
  function showToast() {
    toast.show({
      placement: "top",
      render: () => {
        return (
          <Box bg="black" p="1">
            <Text color="white">To-Do cleared!</Text>
          </Box>
        );
      },
    });
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
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize="lg" fontFamily="Roboto_300Light">
            Language
          </Text>
          <Select
            selectedValue={language}
            minWidth="200"
            accessibilityLabel="Select language"
            _selectedItem={{
              bg: "violet.100",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(val) => setLanguage(val)}
          >
            <Select.Item label="English" value="EN" />
            <Select.Item label="ไทย" value="TH" />
            <Select.Item label="Italian" value="ITA" />
            <Select.Item label="Spanish" value="SPA" />
            <Select.Item label="China" value="CHI" />
            <Select.Item label="Japanese" value="JAP" />
          </Select>
        </HStack>
        <View alignItems="center" justifyContent="center" px="6">
          <LottieView
            autoPlay
            loop
            style={{
              width: "100%",
              height: 360,
            }}
            source={require("../assets/lottie/cat.json")}
          />
          <Text fontSize="lg" fontFamily="Roboto_300Light" textAlign="center">
            This is kind of empty...
          </Text>
          <Text fontSize="lg" fontFamily="Roboto_300Light" textAlign="center">
            but it's a space for a cat
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
