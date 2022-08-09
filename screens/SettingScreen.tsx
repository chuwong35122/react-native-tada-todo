import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Text,
  View,
  Button,
  AlertDialog,
  VStack,
  HStack,
  useToast,
  ScrollView,
} from "native-base";
import React, { useState, useRef, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TodoContext } from "./../contexts/TodoContext";
import { StackNavigationScreenTypes } from "./navigation.types";
import LottieView from "lottie-react-native";
import LanguageSelector from "../components/ui/LanguageSelector";
import { clearStorage } from "../utils/settings";
import { useTranslation } from "react-i18next";
import ToastMessage from "./../components/ui/ToastMessage";

const SettingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationScreenTypes>>();
  const { t } = useTranslation();

  const { updateTodoList } = useContext(TodoContext);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const cancelRef = useRef(null);

  function onClose() {
    setIsAlertOpen(false);
  }

  // clear all To-Do
  async function onPressDeleteTodo() {
    await clearStorage();
    updateTodoList();
    showToast();
    onClose();
  }

  const toast = useToast();
  function showToast() {
    toast.show({
      placement: "top",

      render: () => {
        return <ToastMessage val="settings.cleared" bg="black" />;
      },
    });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {/* Alert confirmation */}
        <AlertDialog
          leastDestructiveRef={cancelRef}
          isOpen={isAlertOpen}
          onClose={onClose}
        >
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>{t("clearModal.header")}</AlertDialog.Header>
            <AlertDialog.Body>{t("clearModal.body")}</AlertDialog.Body>
            <AlertDialog.Footer>
              <Button.Group space={4}>
                <Button
                  variant="unstyled"
                  onPress={onClose}
                  ref={cancelRef}
                  backgroundColor="black"
                  _text={{ color: "white" }}
                >
                  {t("clearModal.cancelBtn")}
                </Button>
                <Button
                  variant="ghost"
                  _text={{ color: "rose.600" }}
                  onPress={onPressDeleteTodo}
                  _pressed={{ backgroundColor: "rose.200" }}
                >
                  {t("clearModal.deleteBtn")}
                </Button>
              </Button.Group>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
        <VStack px="4" space={3}>
          <Text fontSize="3xl" fontFamily="Roboto_500Medium">
            {t("settings.header")}
          </Text>
          {/* Settings */}
          <HStack justifyContent="space-between" alignItems="center">
            <Text fontSize="lg" fontFamily="Roboto_300Light">
              {t("settings.languageLabel")}
            </Text>
            <LanguageSelector />
          </HStack>
          <View alignItems="center" justifyContent="center" px="6">
            <LottieView
              autoPlay
              loop
              style={{
                width: "100%",
                height: 300,
              }}
              source={require("../assets/lottie/cat.json")}
            />
            <Text fontSize="lg" fontFamily="Roboto_300Light" textAlign="center">
              {t("settings.catText1")}
            </Text>
            <Text fontSize="lg" fontFamily="Roboto_300Light" textAlign="center">
              {t("settings.catText2")}
            </Text>
          </View>
        </VStack>
        {/* Clear Storage Button */}
        <VStack space={4} px="4" mt="16" w="full">
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
            {t("settings.clearAll")}
          </Button>
          <Button
            size="lg"
            variant="solid"
            bgColor="black"
            onPress={() => navigation.goBack()}
          >
            {t("settings.back")}
          </Button>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;
