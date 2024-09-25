import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import BottomMenu from "./components/BottomMenu";

export default function App() {
  return (
    <NavigationContainer>
      <BottomMenu />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
