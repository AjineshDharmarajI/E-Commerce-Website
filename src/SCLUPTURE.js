import React from 'react';

import './App.css';
import Product from './Product'


const Sclupture = ({ addToCart,addToWishlist, cartItems, setCartItems,onImageClick }) => {
  const products = [
    {
      id:'S1',
      imgSrc: require("./pic6.jpg"),
      altText: "image",
      description: "Travel Art Set, Print San Francisco California",
      originalPrice: 5000,
      salePrice: 4000
    },
    {
      id:'S2',
      imgSrc: require("./pic7.jpg"),
      altText: "image",
      description: "Divine Ram Darbar 3D Relief Mural",
      originalPrice: 6000,
      salePrice: 5500
    },
    {
      id:'S3',
      imgSrc: require("./pic8.jpg"),
      altText: "image",
      description: "Dance of Krishna Pichwai Painting",
      originalPrice: 9000,
      salePrice: 8000
    },
    {
      id:'S4',
      imgSrc: require("./pic9.jpg"),
      altText: "image",
      description: "TIRUPATI BALAJI WITH GODDESS LAXMI",
      originalPrice: 7000,
      salePrice: 6000
    },
    {
      id:'S5',
      imgSrc: require("./pic10.jpg"),
      altText: "image",
      description: "Divine Ram Darbar 3D Relief Mural",
      originalPrice: 6000,
      salePrice: 5500
    },
    
  ];

  return (
    <div className="category" id='Sculpture'>
      <h2 style={{paddingLeft:"0.3cm",paddingTop:"1cm",margin:"0"}}>SCLUPTURE</h2>
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

export default Sclupture;