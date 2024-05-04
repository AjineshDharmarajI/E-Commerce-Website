import React,{useState} from 'react';
import {Link} from 'react-router-dom'

import './App.css';
import Product from './Product'


const Aesthectics = ({ addToCart,addToWishlist, cartItems, setCartItems,onImageClick }) => {
  const products = [
    {
      id:'AE1',
      imgSrc: require("./background.jpg"),
      altText: "image",
      description: "Travel Art Set, Print San Francisco California",
      originalPrice: 8000,
      salePrice: 7500
    },
    {
      id:'AE2',
      imgSrc: require("./Bu-2.jpg"),
      altText: "image",
      description: "Divine Ram Darbar 3D Relief Mural",
      originalPrice: 1000,
      salePrice: 500
    },
    {
      id:'AE3',
      imgSrc: require("./pic4.jpg"),
      altText: "image",
      description: "TIRUPATI BALAJI WITH GODDESS LAXMI",
      originalPrice: 2500,
      salePrice: 2000
    },
    {
      id:'AE4',
      imgSrc: require("./pic7.jpg"),
      altText: "image",
      description: "Dance of Krishna Pichwai Painting",
      originalPrice: 4000,
      salePrice: 3000
    },
    {
      id:'AE5',
      imgSrc: require("./pic2.jpg"),
      altText: "image",
      description: "Divine Ram Darbar 3D Relief Mural",
      originalPrice: 5000,
      salePrice: 4000
    },
    {
      id:'AE6',
      imgSrc: require("./pic2.jpg"),
      altText: "image",
      description: "Divine Ram Darbar 3D Relief Mural",
      originalPrice: 5000,
      salePrice: 4000
    },
    {
      id:'AE7',
      imgSrc: require("./pic2.jpg"),
      altText: "image",
      description: "Divine Ram Darbar 3D Relief Mural",
      originalPrice: 5000,
      salePrice: 4000
    },
    {
      id:'AE8',
      imgSrc: require("./pic2.jpg"),
      altText: "image",
      description: "Divine Ram Darbar 3D Relief Mural",
      originalPrice: 5000,
      salePrice: 4000
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
      <div className="category" id='aesthectics'>
        <div className='aesthectics_read'>
          <h2 style={{ paddingLeft: "0.3cm", paddingTop: "1cm", margin: "0" }}>Aesthectics</h2>

          {products.length > initialDisplayLimit && (
            <Link to="/Aesthectics_full_product" className="more-items-link" onClick={toggleDisplayLimit} style={{ paddingRight: "0.3cm", paddingTop: "1cm", margin: "0", fontSize: "0.5cm" }} >
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

export default Aesthectics;