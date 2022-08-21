import { TailwindProvider } from "tailwindcss-react-native";
import AppNavigator from "./app/navigation/AppNavigator";
import { Provider } from "react-redux";
import { store } from "./app/Redux/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { KeyboardAvoidingView, Platform } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <TailwindProvider>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            <AppNavigator />
          </KeyboardAvoidingView>
        </TailwindProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
