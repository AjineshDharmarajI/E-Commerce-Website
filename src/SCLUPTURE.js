import React,{useState} from 'react';
import {Link} from 'react-router-dom'

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
    {
      id:'S6',
      imgSrc: require("./pic10.jpg"),
      altText: "image",
      description: "Divine Ram Darbar 3D Relief Mural",
      originalPrice: 6000,
      salePrice: 5500
    },
    {
      id:'S7',
      imgSrc: require("./pic10.jpg"),
      altText: "image",
      description: "Divine Ram Darbar 3D Relief Mural",
      originalPrice: 6000,
      salePrice: 5500
    },
    {
      id:'S8',
      imgSrc: require("./pic10.jpg"),
      altText: "image",
      description: "Divine Ram Darbar 3D Relief Mural",
      originalPrice: 6000,
      salePrice: 5500
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
      <div className="category" id='Sclupture'>
        <div className='Sclupture_read'>
          <h2 style={{ paddingLeft: "0.3cm", paddingTop: "1cm", margin: "0" }}>Sclupture</h2>

          {products.length > initialDisplayLimit && (
            <Link to="/Sclupture_full_product" className="more-items-link" onClick={toggleDisplayLimit} style={{ paddingRight: "0.3cm", paddingTop: "1cm", margin: "0", fontSize: "0.5cm" }} >
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

export default Sclupture;