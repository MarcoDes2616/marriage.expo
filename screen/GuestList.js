import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { fetchAllGuests } from '../api/api';

const GuestList = () => {
    const [guests, setGuests] = useState([]);

  useEffect(() => {
    getGuests();
  }, []);
  const getGuests = async () => {
    try {
      const data = await fetchAllGuests();
      setGuests(data);
    } catch (error) {
      console.error('Error fetching guests:', error);
    }
  };
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
