// CartContext.js
import React, { createContext, useState, useContext } from 'react';
import productData from './product.json';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Initialize cartItems with data from JSON file
  useState(() => {
    setCartItems(productData.products.map((product) => ({
      ...product,
      quantity: 1, // Initial quantity set to 1
    })));
  }, []);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const updateCartItemQuantity = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const contextValue = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    updateCartItemQuantity,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartContext;
