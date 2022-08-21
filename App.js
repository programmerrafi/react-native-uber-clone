import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./app/screens/HomeScreen";
import { Provider } from "react-redux";
import { store } from "./app/Redux/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MapScreen from "./app/screens/MapScreen";
import EastsScreen from "./app/screens/EastsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaProvider>
          <TailwindProvider>
            <Stack.Navigator>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="EastsScreen" component={EastsScreen} />
            </Stack.Navigator>
          </TailwindProvider>
        </SafeAreaProvider>
      </Provider>
    </NavigationContainer>
  );
}
