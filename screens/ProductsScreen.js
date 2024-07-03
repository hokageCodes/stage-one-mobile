import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for icons
import products from '../assets/products.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductsScreen = () => {
  const [cartCount, setCartCount] = useState(0);
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    // Load liked products from AsyncStorage on component mount
    const fetchLikedProducts = async () => {
      try {
        const storedLikedProducts = await AsyncStorage.getItem('likedProducts');
        if (storedLikedProducts) {
          setLikedProducts(JSON.parse(storedLikedProducts));
        }
      } catch (error) {
        console.log('Error loading liked products:', error);
      }
    };

    fetchLikedProducts();
  }, []);

  const toggleLike = async (productId) => {
    try {
      let updatedLikedProducts = [...likedProducts];
      if (updatedLikedProducts.includes(productId)) {
        updatedLikedProducts = updatedLikedProducts.filter(id => id !== productId);
      } else {
        updatedLikedProducts.push(productId);
      }
      setLikedProducts(updatedLikedProducts);
      await AsyncStorage.setItem('likedProducts', JSON.stringify(updatedLikedProducts));
    } catch (error) {
      console.log('Error saving liked products:', error);
    }
  };

  const updateCart = async (product) => {
    try {
      // Retrieve current cart items from AsyncStorage
      const storedItems = await AsyncStorage.getItem('cartItems');
      let updatedCartItems = storedItems ? JSON.parse(storedItems) : [];

      // Check if the product already exists in cart
      const existingItem = updatedCartItems.find(item => item.id === product.id);
      if (existingItem) {
        // Increment quantity if product already in cart
        existingItem.quantity += 1;
      } else {
        // Add new product to cart
        updatedCartItems.push({ ...product, quantity: 1 });
      }

      // Save updated cart items to AsyncStorage
      await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

      // Update cart count
      updateCartCount(updatedCartItems);
    } catch (error) {
      console.log('Error updating cart:', error);
    }
  };

  const updateCartCount = (items) => {
    let count = items.reduce((total, item) => total + item.quantity, 0);
    setCartCount(count);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2} // Two columns for grid layout
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productCard}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
            </View>
            <View style={styles.productActions}>
              <TouchableOpacity style={styles.actionButton} onPress={() => toggleLike(item.id)}>
                <Ionicons name={likedProducts.includes(item.id) ? 'heart' : 'heart-outline'} size={20} color={likedProducts.includes(item.id) ? 'red' : '#007BFF'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} onPress={() => updateCart(item)}>
                <Text style={styles.actionText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  productList: {
    paddingBottom: 20,
  },
  productCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 5,
    elevation: 3,
    overflow: 'hidden', // Ensure content doesn't overflow on Android
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  productDetails: {
    padding: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
  productActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    color: '#007BFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ProductsScreen;
