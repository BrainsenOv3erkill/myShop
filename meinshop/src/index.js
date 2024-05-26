
import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Product from "./components/Product";
import WarenKorb from './components/warenKorb';
import products from "./products";



/*const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <div className="topic">
      <h1 classname="shop-title"> Use your Imagination </h1>
      </div>
    
    <div className="container">
    
    
      {/* key muss vergeben werden, da wir sonst eine Fehlermeldung bekommen,
      da die Products für React nicht eindeutig identifizierbar sind */
    /*}
      {products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          preis={product.preis}
          imageURL={product.imageURL}
          menge={product.menge}
          initialTimer={product.timer}
        />
      ))}
    </div>

  </>
);*/

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="topic">
        <h1 className="shop-title">Use your Imagination</h1>
      </div>

      <div className="main-content">
        <div className="container">
          {products.map((product, index) => (
            <Product
              key={index}
              name={product.name}
              preis={product.preis}
              imageURL={product.imageURL}
              menge={product.menge}
              initialTimer={product.timer}
              addToCart={addToCart}
            />
          ))}
        </div>
        
        <WarenKorb cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
