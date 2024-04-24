// CartPage.js
import React from 'react';
import { useCart } from './CartContext';
import { CartItem, TotalCartSummary } from './CartComponents';

const CartPage = () => {
  const { cartItems } = useCart();

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <TotalCartSummary />
    </div>
  );
};

export default CartPage;
