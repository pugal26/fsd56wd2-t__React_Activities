// CartComponents.js
import React from 'react';
import { useCart } from './CartContext';

export const CartItem = ({ item }) => {
  const { updateCartItemQuantity } = useCart();

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    updateCartItemQuantity(item.id, newQuantity);
  };

  // Create an array of options for the dropdown based on available stock
  const dropdownOptions = [];
  for (let i = 1; i <= item.stock; i++) {
    dropdownOptions.push(i);
  }

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..src/assets/thumbnail.png" alt={item.title} className="img-fluid rounded-start" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">Brand: {item.brand}</p>
            <p className="card-text">Description: {item.description}</p>
            <p className="card-text">Rating: {item.rating}</p>
            <select value={item.quantity} onChange={handleQuantityChange} className="form-select mb-2">
              {dropdownOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
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