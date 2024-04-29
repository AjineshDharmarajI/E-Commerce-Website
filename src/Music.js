import React from 'react';

import './App.css';
import Product from './Product'


const Music = ({ addToCart,addToWishlist, cartItems, setCartItems,onImageClick }) => {
  const products = [
    {
      id:'M1',
      imgSrc: require("./pic5.jpg"),
      altText: "image",
      description: "Travel Art Set, Print San Francisco California",
      originalPrice: 1000,
      salePrice: 500
    },
    {
      id:'M2',
      imgSrc: require("./Bu-2.jpg"),
      altText: "image",
      description: "TIRUPATI BALAJI WITH GODDESS LAXMI",
      originalPrice: 8000,
      salePrice: 7400
    },
    {
      id:'M3',
      imgSrc: require("./pic9.jpg"),
      altText: "image",
      description: "Divine Ram Darbar 3D Relief Mural",
      originalPrice: 9000,
      salePrice: 8000
    },
    {
      id:'M4',
      imgSrc: require("./pic6.jpg"),
      altText: "image",
      description: "Dance of Krishna Pichwai Painting",
      originalPrice: 10000,
      salePrice: 9000
    },
    {
      id:'M5',
      imgSrc: require("./pic3.jpg"),
      altText: "image",
      description: "TIRUPATI BALAJI WITH GODDESS LAXMI",
      originalPrice: 4000,
      salePrice: 3000
    },
    
  ];

  return (
    <div className="category" id='Music'>
      <h2 style={{paddingLeft:"0.3cm",paddingTop:"1cm",margin:"0"}}>MUSIC</h2>
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

export default Music;