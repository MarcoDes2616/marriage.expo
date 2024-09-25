import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GuestList from "./screen/GuestList";
import SuppliersList from "./screen/SuppliersList";
import BottomMenu from "./components/BottomMenu";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Invitados">
        <Stack.Screen name="Invitados" component={GuestList} />
        <Stack.Screen name="Proveedores" component={SuppliersList} />
      </Stack.Navigator>
      <BottomMenu />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
