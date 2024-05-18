import React from 'react';
import './App.css';
import Product from './Product';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Art = ({ addToCart, addToWishlist, cartItems, setCartItems, onImageClick  }) => {
  const products = [
    {
      id: 'A1',
      imgSrc: require("./pic1.jpg"),
      altText: "image",
      description: "Travel Art Set, Print San Francisco California",
      originalPrice: 3000,
      salePrice: 2000
    },
    {
      id: 'A2',
      imgSrc: require("./pic2.jpg"),
      altText: "image",
      description: "TIRUPATI BALAJI WITH GODDESS LAXMI",
      originalPrice: 4000,
      salePrice: 3000
    },
    {
      id: 'A3',
      imgSrc: require("./pic3.jpg"),
      altText: "image",
      description: "Dance of Krishna Pichwai Painting",
      originalPrice: 7000,
      salePrice: 6000
    },
    {
      id: 'A4',
      imgSrc: require("./pic4.jpg"),
      altText: "image",
      description: "Divine Ram Darbar 3D Relief Mural",
      originalPrice: 2000,
      salePrice: 1500
    },
    {
      id: 'A5',
      imgSrc: require("./pic5.jpg"),
      altText: "image",
      description: "TIRUPATI BALAJI WITH GODDESS LAXMI",
      originalPrice: 1500,
      salePrice: 2000
    },
    {
      id: 'A6',
      imgSrc: require("./pic1.jpg"),
      altText: "image",
      description: "Travel Art Set, Print San Francisco California",
      originalPrice: 3000,
      salePrice: 2000
    },
    {
      id: 'A7',
      imgSrc: require("./pic1.jpg"),
      altText: "image",
      description: "Travel Art Set, Print San Francisco California",
      originalPrice: 3000,
      salePrice: 2000
    },
    {
      id: 'A8',
      imgSrc: require("./pic1.jpg"),
      altText: "image",
      description: "Travel Art Set, Print San Francisco California",
      originalPrice: 3000,
      salePrice: 2000
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
    <div className="category" id='Art'>
      <div className='art_read'>
      <h2 style={{ paddingLeft: "0.3cm", paddingTop: "1cm", margin: "0" }}>Newly Launched</h2>
      {/* Display link to Art2.js if there are more products */}
      {products.length > initialDisplayLimit && (
        <Link to="/art_full_product" className="more-items-link" onClick={toggleDisplayLimit} style={{ paddingRight: "0.3cm", paddingTop: "1cm", margin: "0",fontSize:"0.5cm" }} >
          More Items
        </Link>
      )}
      </div>
      <hr />
      <div className="productimgcoll">
        {/* Map over products up to the display limit */}
        {products.slice(0, displayLimit).map((product, index) => (
          <Product
            key={index}
            {...product}
            addToCart={addToCart}
            addToWishlist={addToWishlist} // Pass addToWishlist function
            cartItems={cartItems}
            setCartItems={setCartItems}
            onImageClick={onImageClick} // Pass the function
          />
        ))}

        
      </div>
      
    </div>
  );
};

export default Art;
