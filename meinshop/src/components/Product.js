import React from 'react';
import "../styles/Product.css";
import useTimer from './useTimer';


const Product = ({ name, preis, imageURL, menge, initialTimer, addToCart }) => {
  const timer = useTimer(initialTimer);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };


  return (
    <div className="product">
      <img src={imageURL} alt={name} className="product-image" />
      <h2>{name}</h2>
      <p>Preis: {preis} €</p>
      <p>Auf Lager: {menge}</p>
      <p>Verfügbar für: {formatTime(timer)}</p>
      <button onClick={() => addToCart({ name, preis })}>Add to cart</button>
    </div>
  );
};

export default Product;