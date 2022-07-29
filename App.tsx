import { NativeBaseProvider } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoContextProvider from "./contexts/TodoContext";

// screens
import { StackNavigationScreenTypes } from "./screens/navigation.types";
import HomeScreen from "./screens/HomeScreen";
import CreateTodoScreen from "./screens/CreateTodoScreen";

const Stack = createNativeStackNavigator<StackNavigationScreenTypes>();
const themes = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer theme={themes}>
        <TodoContextProvider>
          <SafeAreaProvider>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="CreateTodo" component={CreateTodoScreen} />
            </Stack.Navigator>
          </SafeAreaProvider>
        </TodoContextProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
