import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom
import './App.css';
import Product from './Product';

const Music = ({ addToCart, addToWishlist, cartItems, setCartItems, onImageClick }) => {
  const products = [
    {
      id: 'M1',
      imgSrc: require("./pic5.jpg"),
      altText: "image",
      description: "Travel Art Set, Print San Francisco California",
      originalPrice: 1000,
      salePrice: 500
    },
    {
      id: 'M2',
      imgSrc: require("./Bu-2.jpg"),
      altText: "image",
      description: "TIRUPATI BALAJI WITH GODDESS LAXMI",
      originalPrice: 8000,
      salePrice: 7400
    },
    {
      id: 'M3',
      imgSrc: require("./pic9.jpg"),
      altText: "image",
      description: "Divine Ram Darbar 3D Relief Mural",
      originalPrice: 9000,
      salePrice: 8000
    },
    {
      id: 'M4',
      imgSrc: require("./pic6.jpg"),
      altText: "image",
      description: "Dance of Krishna Pichwai Painting",
      originalPrice: 10000,
      salePrice: 9000
    },
    {
      id: 'M5',
      imgSrc: require("./pic3.jpg"),
      altText: "image",
      description: "TIRUPATI BALAJI WITH GODDESS LAXMI",
      originalPrice: 4000,
      salePrice: 3000
    },
    {
      id: 'M6',
      imgSrc: require("./pic3.jpg"),
      altText: "image",
      description: "TIRUPATI BALAJI WITH GODDESS LAXMI",
      originalPrice: 4000,
      salePrice: 3000
    },
    {
      id: 'M7',
      imgSrc: require("./pic3.jpg"),
      altText: "image",
      description: "TIRUPATI BALAJI WITH GODDESS LAXMI",
      originalPrice: 4000,
      salePrice: 3000
    },
    {
      id: 'M8',
      imgSrc: require("./pic3.jpg"),
      altText: "image",
      description: "TIRUPATI BALAJI WITH GODDESS LAXMI",
      originalPrice: 4000,
      salePrice: 3000
    },
  ];

  const initialDisplayLimit = 6; // Initial number of products to display

  // State to track the number of products displayed
  const [displayLimit, setDisplayLimit] = useState(initialDisplayLimit);

  // Function to toggle display limit
  const toggleDisplayLimit = () => {
    setDisplayLimit(products.length); // Set display limit to total number of products
  };

  return (
    <div>
      <div className="category" id='Music'>
        <div className='music_read'>
          <h2 style={{ paddingLeft: "0.3cm", paddingTop: "1cm", margin: "0" }}>MUSIC</h2>

          {products.length > initialDisplayLimit && (
            <Link to="/music_full_product" className="more-items-link" onClick={toggleDisplayLimit} style={{ paddingRight: "0.3cm", paddingTop: "1cm", margin: "0", fontSize: "0.5cm" }} >
              More Items
            </Link>
          )}
        </div>
        <hr />
        <div className="productimgcoll">
        {products.slice(0, displayLimit).map((product, index) => (
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
    </div>
  );
};

export default Music;
