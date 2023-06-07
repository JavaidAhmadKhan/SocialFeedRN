import { View, Text } from 'react-native';
import React from 'react';

const ItemPrice = ({ name, price }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{price}</Text>
    </View>
  );
};

export default ItemPrice;
