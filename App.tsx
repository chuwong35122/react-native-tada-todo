import { View, Text } from "react-native";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <SafeAreaView>
            <Text>Hello Tada-Todo!</Text>
          </SafeAreaView>
        </SafeAreaProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
