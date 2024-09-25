import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { fetchAllGuests } from "../api/api";

const GuestList = () => {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    const response = fetchAllGuests()
    setGuests(response)
  }
  console.log(guests);
  
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
