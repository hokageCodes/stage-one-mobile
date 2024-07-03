import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsScreen from '../screens/ProductsScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Products" component={ProductsScreen} />
        <Tab.Screen name="Checkout" component={CheckoutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;
