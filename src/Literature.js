// Literature.js
import React from 'react';

import './App.css';
import Product from './Product'


const Literature = ({ addToCart,addToWishlist, cartItems, setCartItems,onImageClick }) => {
  const products = [
    {
      id:'L1',
      imgSrc: require("./Bu-1.jpg"),
      altText: "image",
      description: "Travel Art Set, Print San Francisco California",
      originalPrice: 6000,
      salePrice: 5000
    },
    {
      id:'L2',
      imgSrc: require("./Bu-3.jpg"),
      altText: "image",
      description: "Divine Ram Darbar 3D Relief Mural",
      originalPrice: 2000,
      salePrice: 1000
    },
    {
      id:'L3',
      imgSrc: require("./Bu-4.jpg"),
      altText: "image",
      description: "Kerala's traditional mural paintings",
      originalPrice: 2500,
      salePrice: 2000
    },
    {
      id:'L4',
      imgSrc: require("./Bu-5.jpg"),
      altText: "image",
      description: "TIRUPATI BALAJI WITH GODDESS LAXMI",
      originalPrice: 8000,
      salePrice: 7500
    },
    {
      id:'L5',
      imgSrc: require("./Bu-6.jpg"),
      altText: "image",
      description: "Dance of Krishna Pichwai Painting",
      originalPrice: 10000,
      salePrice: 9000
    },
    
  ];

  return (
    <div className="category" id='Literature'>
      <h2 style={{paddingLeft:"0.3cm",paddingTop:"1cm",margin:"0"}}>LITERATURE</h2>
      <hr />
      <div className="productimgcoll">
        {products.map((product, index) => (
          <Product
            key={index}
            {...product}
            addToCart={addToCart} // Pass addToCart function as prop
            addToWishlist={addToWishlist}
            cartItems={cartItems} // Pass cartItems as prop
            setCartItems={setCartItems} // Pass setCartItems as prop
            onImageClick={onImageClick} 
          />
        ))}
      </div>
    </div>
  );
};

export default Literature;