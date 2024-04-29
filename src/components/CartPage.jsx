// CartPage.js
import React from 'react';
import { useCart } from './CartContext';
import { CartItem, TotalCartSummary } from './CartComponents';

const CartPage = () => {
  const { cartItems, removeItemFromCart  } = useCart();

  const calculateSubTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subTotal = calculateSubTotal();
    const shipping = 0; // Assuming shipping is free
    return subTotal + shipping;
  };

   // Function to handle removal of items from cart
   const handleRemoveItemClick = (itemId) => {
    removeItemFromCart(itemId);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-light p-3 rounded">
          <div className="card m-4">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item}  onRemoveItemClick={handleRemoveItemClick} />
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order Total Value</h5><hr/>
              <p>Sub Total: ${calculateSubTotal()}</p>
              <p>Shipping: FREE</p>
              <h5>Total: ${calculateTotal()}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
