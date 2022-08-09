import React, { useState, useContext, useEffect } from "react";
import { View, Input, Button, VStack, Text, Switch, HStack } from "native-base";
import { v4 as uuidv4 } from "uuid";
import { TodoItemType } from "../interfaces/todo.interface";
import "react-native-get-random-values";
import { StackNavigationScreenTypes } from "./navigation.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { addTodo } from "../utils/todo";
import { todoPlaceholder } from "../constants/placeholder";
import { TodoContext } from "../contexts/TodoContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";

const CreateTodoScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationScreenTypes>>();

  const { t } = useTranslation();

  const [input, setInput] = useState("");
  const [titlePlaceholder, setTitlePlaceholder] = useState("");
  const [priority, setPriority] = useState(false);
  const { updateTodoList } = useContext(TodoContext);

  // random funny placeholder
  useEffect(() => {
    const rndIndex = Math.floor(Math.random() * todoPlaceholder.length);
    const placeholder = t(todoPlaceholder[rndIndex]);
    setTitlePlaceholder(placeholder);
  }, []);

  function handleChangeInput(val: string) {
    setInput(val);
  }

  function handleChangeSwitch(val: boolean) {
    setPriority(val);
  }

  // const toast = useToast();
  async function handleSubmit() {
    if (!input) {
      return;
    }
    //  else if (input.length > 33) {
    //   toast.show({
    //     placement: "top",
    //     render: () => {
    //       return <ToastMessage val="create.longErr" bg="black" />;
    //     },
    //   });

    //   return;
    // }

    const id = uuidv4();
    const priorityKey = priority ? "@high" : "@med";
    const newTodo: TodoItemType = {
      id,
      priority: priorityKey,
      todo: input,
      date: new Date(),
      status: false,
    };

    await addTodo(newTodo, priorityKey);
    await updateTodoList();
    navigation.goBack();
  }
  return (
    <SafeAreaView
      style={{ backgroundColor: "#fff", paddingTop: 20, paddingHorizontal: 4 }}
    >
      <VStack space={4} justifyContent="space-between" style={{ height: 440 }}>
        <View mx="2">
          <View>
            <Text fontSize="3xl" fontFamily="Roboto_500Medium" lineHeight="xs">
              {t("create.header")}
            </Text>
            <Text fontFamily="Roboto_300Light">{t("create.desc")}</Text>
          </View>

          <View mt="4">
            <Text fontFamily="Roboto_500Medium">{t("create.titleLabel")}</Text>
            <Input
              size="lg"
              placeholder={titlePlaceholder}
              value={input}
              autoFocus
              onChangeText={(val) => handleChangeInput(val)}
              placeholderTextColor="gray.500"
              _focus={{
                borderColor: "#000",
                borderWidth: 1,
                backgroundColor: "coolGray.100",
              }}
            />
          </View>
          <View
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fontFamily="Roboto_500Medium">{t("create.setPriority")}</Text>
            <HStack alignItems="center" space="2">
              <Text
                fontSize="sm"
                color={priority === false ? "black" : "gray.500"}
              >
                {t("create.low")}
              </Text>
              <Switch
                size="lg"
                offTrackColor="gray.100"
                onTrackColor="violet.200"
                onThumbColor="violet.500"
                offThumbColor="gray.100"
                onValueChange={(val) => handleChangeSwitch(val)}
                value={priority}
              />
              <Text color={priority === true ? "black" : "gray.500"}>
                {t("create.high")}
              </Text>
            </HStack>
          </View>
        </View>
        <View mx="2">
          <Button
            size="lg"
            bgColor="black"
            color="white"
            onPress={handleSubmit}
            mb="2"
          >
            {t("create.createBtn")}
          </Button>
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
            onPress={() => navigation.goBack()}
          >
            {t("create.backBtn")}
          </Button>
        </View>
      </VStack>
    </SafeAreaView>
  );
};

export default CreateTodoScreen;
