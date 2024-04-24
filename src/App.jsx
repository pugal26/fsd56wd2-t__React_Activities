// App.js
import React from 'react';
import { CartProvider } from './components/CartContext';
import CartPage from './components/CartPage';

const App = () => {
  return (
    <CartProvider>
      <CartPage />
    </CartProvider>
  );
};

export default App;
