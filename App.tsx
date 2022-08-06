import { NativeBaseProvider } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoContextProvider from "./contexts/TodoContext";
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { View, Text, LogBox } from "react-native";

// screens
import { StackNavigationScreenTypes } from "./screens/navigation.types";
import HomeScreen from "./screens/HomeScreen";
import CreateTodoScreen from "./screens/CreateTodoScreen";
import ViewTodoScreen from "./screens/ViewTodoScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SettingScreen from "./screens/SettingScreen";

LogBox.ignoreLogs(["", "We can not support a function callback."]);

const Stack = createNativeStackNavigator<StackNavigationScreenTypes>();
const themes = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <NativeBaseProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer theme={themes}>
          <TodoContextProvider>
            <SafeAreaProvider>
              <Stack.Navigator>
                <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="CreateTodo"
                  component={CreateTodoScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen name="ViewTodo" component={ViewTodoScreen} />
                <Stack.Screen
                  name="Setting"
                  component={SettingScreen}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            </SafeAreaProvider>
          </TodoContextProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
    </NativeBaseProvider>
  );
}
