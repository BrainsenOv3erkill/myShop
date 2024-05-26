// src/components/warenKorb.js
import React, { useState } from 'react';
import '../styles/WarenKorb.css';

const WarenKorb = ({ cartItems, removeFromCart }) => {
  return (
    <div className="warenkorb">
      <h2>Warenkorb</h2>
      {cartItems.length === 0 ? (
        <p>Ihr Warenkorb ist leer.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <p>{item.name} - {item.preis} €</p>
            <button onClick={() => removeFromCart(index)}>Löschen</button>
          </div>
        ))
      )}
    </div>
  );
};

export default WarenKorb;