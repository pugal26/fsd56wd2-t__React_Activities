// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import productData from './product.json';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: productData.products.map((product) => ({
      ...product,
      quantity: 1,
    })),
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
    updateCartItemQuantity: (state, action) => {
      const { itemId, newQuantity } = action.payload;
      state.cartItems = state.cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateCartItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;