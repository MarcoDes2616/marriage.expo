import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AlertForm = ({ onSubmit }) => {
  const [coinName, setCoinName] = useState('');
  const [priceThreshold, setPriceThreshold] = useState('');

  const handleSubmit = () => {
    onSubmit({ coinName, priceThreshold });
    setCoinName('');
    setPriceThreshold('');
  };

  return (
    <View>
      <Text>Coin Name:</Text>
      <TextInput
        value={coinName}
        onChangeText={setCoinName}
        placeholder="Enter coin name"
      />
      <Text>Price Threshold:</Text>
      <TextInput
        value={priceThreshold}
        onChangeText={setPriceThreshold}
        placeholder="Enter price threshold"
        keyboardType="numeric"
      />
      <Button title="Create Alert" onPress={handleSubmit} />
    </View>
  );
};

export default AlertForm;