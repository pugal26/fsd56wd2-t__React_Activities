// CartComponents.js
import React from 'react';
import { useCart } from './CartContext';

export const CartItem = ({ item, onRemoveItemClick  }) => {
  const { updateCartItemQuantity } = useCart();

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    updateCartItemQuantity(item.id, newQuantity);
  };

  // Function to handle removal of item
  const handleRemoveItem = () => {
    onRemoveItemClick(item.id);
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
          <img src="https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111864_iphonex.png" alt={item.title} className="img-fluid rounded-start mt-2" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-text"><strong>Brand:</strong> {item.brand}</p>
            <p className="card-text"><strong>Description:</strong> {item.description}</p>
            <p className="card-text"><strong>Rating:</strong> {item.rating}</p>
            <select value={item.quantity} onChange={handleQuantityChange} className="form-select mb-2">
              {dropdownOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button onClick={handleRemoveItem} className="btn text-danger">REMOVE</button>
            </div>
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
