
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Product from "./components/Product";
import products from "./products";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <div className="topic">
      <h1 classname="shop-title"> Use your Imagination </h1>
      </div>
    
    <div className="container">
    
    
      {/* key muss vergeben werden, da wir sonst eine Fehlermeldung bekommen,
      da die Products für React nicht eindeutig identifizierbar sind */}
      {products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          preis={product.preis}
          imageURL={product.imageURL}
          menge={product.menge}
        />
      ))}
    </div>
  </>
);