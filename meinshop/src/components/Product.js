import React from 'react';
import "../styles/Product.css";


const Product = ({ name, preis, imageURL, menge }) => {
  return (
    <div className="product">
      <img src={imageURL} alt={name} className="product-image" />
      <h2>{name}</h2>
      <p>Preis: {preis} €</p>
      <p>Auf Lager: {menge}</p>
    </div>
  );
};

export default Product;