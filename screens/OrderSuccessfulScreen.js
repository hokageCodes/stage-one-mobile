import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const OrderSuccessfulScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.ibb.co/VQmFRnV/pngtree-flat-success-payment-icon-with-approved-money-vector-vector-png-image-47107438.jpg' }} style={styles.successImage} />
      <Text style={styles.successText}>Order Successful!</Text>
      <Button title="Go to Products" onPress={() => navigation.navigate('Products')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  successImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#007BFF',
  },
});

export default OrderSuccessfulScreen;


