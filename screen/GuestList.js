import React from "react";
import { Text, View, StyleSheet } from "react-native";

const GuestList = () => {
  return (
    <View style={styles.container}>
      <Text>Pantalla de Invitados</Text>
    </View>
  );
};

export default GuestList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
