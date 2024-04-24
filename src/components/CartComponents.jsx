// CartComponents.js
import React from 'react';
import { useCart } from './CartContext';

export const CartItem = ({ item }) => {
  const { updateCartItemQuantity } = useCart();

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    updateCartItemQuantity(item.id, newQuantity);
  };

  return (
    <div>
      <p>{item.title}</p>
      <p>Price: ${item.price}</p>
      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={handleQuantityChange}
      />
      <p>Total: ${item.price * item.quantity}</p>
    </div>
  );
};

export const TotalCartSummary = () => {
  const { cartItems } = useCart();

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Amount: ${totalAmount}</p>
    </div>
  );
};
