import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GuestList from "../screen/GuestList";
import SuppliersList from "../screen/SuppliersList";

const Tab = createBottomTabNavigator();

const BottomMenu = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#007bff" },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#ddd",
      }}
    >
      <Tab.Screen name="Invitados" component={GuestList} />
      <Tab.Screen name="Proveedores" component={SuppliersList} />
    </Tab.Navigator>
  );
};

export default BottomMenu;