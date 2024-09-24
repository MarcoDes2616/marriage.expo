import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Coin = ({ coin, onPress }) => {
  const priceChangeColor = coin.price_change_percentage_24h > 0 ? '#34C759' : '#FF3B30';

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.left}>
          <Text style={styles.name}>{coin.name}</Text>
          <Text style={styles.symbol}>{coin.symbol.toUpperCase()}</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.price}>${coin.current_price.toFixed(2)}</Text>
          <Text style={[styles.priceChange, { color: priceChangeColor }]}>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5EA',
  },
  left: {
    flexDirection: 'column',
  },
  right: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  symbol: {
    color: '#A0A0A0',
    fontSize: 14,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
  },
  priceChange: {
    fontSize: 14,
  },
});

export default Coin;