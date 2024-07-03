import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const OrderSuccessfulScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Order Successful!</Text>
      <Button title="Go to Products" onPress={() => navigation.navigate('Products')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OrderSuccessfulScreen;
