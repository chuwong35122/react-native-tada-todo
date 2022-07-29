import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import { StackNavigationScreenTypes } from "./screens/navigation.types";
import HomeScreen from "./screens/HomeScreen";
import CreateTodoScreen from "./screens/CreateTodoScreen";

const Stack = createNativeStackNavigator<StackNavigationScreenTypes>();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
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
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
