import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Linking, Alert } from "react-native";
import { fetchAllGuests, sendInvitation } from "../api/api";
import { FontAwesome } from '@expo/vector-icons'; // Para usar iconos

const GuestList = () => {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetchAllGuests();
      setGuests(response);
    } catch (error) {
      console.error("Error fetching guests:", error);
    }
  };

  const handleSendInvitation = async (id) => {
    try {
      await sendInvitation(id);
      Alert.alert("Invitación enviada", `Se ha enviado la invitación al invitado con ID: ${id}`);
      // Refrescar los datos después de enviar la invitación
      fetchData();
    } catch (error) {
      Alert.alert("Error", "Hubo un error al enviar la invitación.");
    }
  };

  const handleWhatsApp = (phone) => {
    const message = `Hola, te invitamos a nuestro evento de boda.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    Linking.openURL(url).catch(() => {
      Alert.alert("Error", "No se pudo abrir WhatsApp.");
    });
  };

  const renderGuest = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.title?.title} {item.first_name} {item.last_name}</Text>
      <Text style={styles.detail}>Teléfono: {item.phone}</Text>
      <Text style={styles.detail}>Email: {item.email}</Text>
      
      <View style={styles.row}>
        <FontAwesome name="star" size={16} color="#555" />
        <Text style={styles.detail}> Rol: {item.role?.role_name}</Text>
      </View>

      <View style={styles.row}>
        <FontAwesome name="envelope" size={16} color="#555" />
        {item.invitation_sent_at ? (
          <Text style={styles.detail}> Invitación enviada el: {new Date(item.invitation_sent_at).toLocaleString()}</Text>
        ) : (
          <Text style={styles.detail}> Invitación no enviada</Text>
        )}
      </View>

      <View style={styles.buttonContainer}>
        {/* Botón de WhatsApp */}
        <TouchableOpacity style={styles.button} onPress={() => handleWhatsApp(item.phone)}>
          <FontAwesome name="whatsapp" size={24} color="green" />
          <Text style={styles.buttonText}>WhatsApp</Text>
        </TouchableOpacity>

        {/* Botón de Enviar Invitación */}
        <TouchableOpacity style={styles.button} onPress={() => handleSendInvitation(item.id)}>
          <FontAwesome name="send" size={24} color="blue" />
          <Text style={styles.buttonText}>Enviar Invitación</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Invitados</Text>
      <FlatList
        data={guests}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderGuest}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default GuestList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  detail: {
    fontSize: 14,
    marginBottom: 10,
    color: "#555",
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#555",
  },
});

