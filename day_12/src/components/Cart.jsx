
import React from 'react';

const Cart = () => {
  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <h1>My Cart</h1>
      <p>Your cart is currently empty.</p>

      <button style={{
        padding: '10px 20px',
        backgroundColor: 'green',
        color: 'white',
        border: 'none',
        borderRadius: '5px'
      }}>
        Continue Shopping
      </button>
    </div>
  );
};

export default Cart;
