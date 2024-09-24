import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PriceAlert = ({ coin, priceThreshold, currentPrice, onDelete }) => {
  const priceChange = ((currentPrice - priceThreshold) / priceThreshold) * 100;

  return (
    <TouchableOpacity onPress={onDelete}>
      <View style={styles.container}>
        <View style={styles.coinContainer}>
          <Text style={styles.coinName}>{coin}</Text>
          <Text style={styles.coinPrice}>
            {currentPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </Text>
        </View>
        <View style={styles.alertContainer}>
          <Text style={styles.alertText}>
            {priceChange > 0 ? (
              <Ionicons name="md-arrow-up" size={24} color="green" />
            ) : (
              <Ionicons name="md-arrow-down" size={24} color="red" />
            )}
            {priceChange.toFixed(2)}%
          </Text>
          <Text style={styles.alertText}>
            {priceThreshold.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
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
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cccccc',
  },
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinName: {
    fontWeight: 'bold',
    marginRight: 8,
  },
  coinPrice: {
    fontWeight: 'bold',
  },
  alertContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alertText: {
    marginLeft: 8,
  },
});

export default PriceAlert;