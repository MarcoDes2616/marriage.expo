import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
function InvitadosScreen() {
  return (
    <View style={styles.container}>
      <Text>Pantalla de Invitados</Text>
    </View>
  );
}

function ProveedoresScreen() {
  return (
    <View style={styles.container}>
      <Text>Pantalla de Proveedores</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Invitados">
        <Stack.Screen name="Invitados" component={InvitadosScreen} />
        <Stack.Screen name="Proveedores" component={ProveedoresScreen} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
