import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import ProductsScreen from './screens/ProductsScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import OrderSuccessfulScreen from './screens/OrderSuccessfulScreen';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let label;

          if (route.name === 'Products') {
            label = focused ? '🛒' : '🛍️';
          } else if (route.name === 'Checkout') {
            label = focused ? '📦' : '🛒';
          }

          return <Text style={{ color, fontSize: size }}>{label}</Text>;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
        },
      })}
    >
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Checkout" component={CheckoutScreen} />
      <Tab.Screen name="OrderSuccess" component={OrderSuccessfulScreen} options={{ tabBarButton: () => null }} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
};

export default App;
