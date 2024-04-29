// CartComponents.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateCartItemQuantity } from './cartSlice';

export const CartItem = ({ item, onRemoveItemClick  }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    dispatch(updateCartItemQuantity({ itemId: item.id, newQuantity }));
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
          <img src="https://admin.hyperce.io/assets/1__12__preview.jpg?w=800" alt={item.title} className="img-fluid rounded-start" />
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
            <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
            <button onClick={() => onRemoveItemClick(item.id)} className="btn text-danger">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TotalCartSummary = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Amount: ${totalAmount}</p>
    </div>
  );
};