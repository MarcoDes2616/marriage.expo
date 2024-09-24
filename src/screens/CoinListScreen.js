import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchCoins } from '../services/api';
import Coin from '../components/Coin';

const CoinListScreen = () => {
  const [coins, setCoins] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const loadCoins = async () => {
      const data = await fetchCoins();
      setCoins(data);
    };
    loadCoins();
  }, []);
  console.log(coins);
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => Alert.alert(item.id)}>
      <Coin coin={item} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search coins"
        value={searchQuery}
        onChangeText={handleSearch}
        enterKeyHint="search"
      />
      <FlatList
        data={filteredCoins}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.alertButton} onPress={() => navigation.navigate('AlertForm')}>
        <Text style={styles.alertButtonText}>Create Price Alert</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  alertButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  alertButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default CoinListScreen;