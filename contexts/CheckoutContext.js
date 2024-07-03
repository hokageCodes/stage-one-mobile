import React, { createContext, useState } from 'react';

// Create a context with an empty array as the default value
export const CheckoutContext = createContext([]);

export const CheckoutProvider = ({ children }) => {
  const [checkoutItems, setCheckoutItems] = useState([]);

  const addItemToCheckout = (item) => {
    setCheckoutItems((prevItems) => [...prevItems, item]);
  };

  const removeItemFromCheckout = (itemId) => {
    setCheckoutItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <CheckoutContext.Provider value={{ checkoutItems, addItemToCheckout, removeItemFromCheckout }}>
      {children}
    </CheckoutContext.Provider>
  );
};
