import { NativeBaseProvider } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoContextProvider from "./contexts/TodoContext";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { View, Text } from "react-native";

// screens
import { StackNavigationScreenTypes } from "./screens/navigation.types";
import HomeScreen from "./screens/HomeScreen";
import CreateTodoScreen from "./screens/CreateTodoScreen";
import ViewTodoScreen from "./screens/ViewTodoScreen";

const Stack = createNativeStackNavigator<StackNavigationScreenTypes>();
const themes = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#f7f7f7",
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
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
      <NavigationContainer theme={themes}>
        <TodoContextProvider>
          <SafeAreaProvider>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="CreateTodo" component={CreateTodoScreen} />
              <Stack.Screen name="ViewTodo" component={ViewTodoScreen} />
            </Stack.Navigator>
          </SafeAreaProvider>
        </TodoContextProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
