import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchCoin } from '../services/api';

const CoinDetailScreen = ({ route }) => {
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    const { id } = route.params;
    fetchCoin(id).then((data) => setCoin(data));
  }, []);

  if (!coin) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const { name, symbol, current_price, price_change_percentage_24h, market_cap } = coin;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.symbol}>{symbol.toUpperCase()}</Text>
      <Text style={styles.price}>${current_price.toFixed(2)}</Text>
      <Text style={price_change_percentage_24h > 0 ? styles.positiveChange : styles.negativeChange}>
        {price_change_percentage_24h.toFixed(2)}%
      </Text>
      <Text style={styles.marketCap}>Market Cap: ${market_cap.toLocaleString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  symbol: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  price: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  positiveChange: {
    fontSize: 18,
    color: 'green',
    marginBottom: 20,
  },
  negativeChange: {
    fontSize: 18,
    color: 'red',
    marginBottom: 20,
  },
  marketCap: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CoinDetailScreen;