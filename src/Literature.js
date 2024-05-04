// Literature.js
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
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
    {
      id:'L6',
      imgSrc: require("./Bu-6.jpg"),
      altText: "image",
      description: "Dance of Krishna Pichwai Painting",
      originalPrice: 10000,
      salePrice: 9000
    },
    {
      id:'L7',
      imgSrc: require("./Bu-6.jpg"),
      altText: "image",
      description: "Dance of Krishna Pichwai Painting",
      originalPrice: 10000,
      salePrice: 9000
    },
    {
      id:'L8',
      imgSrc: require("./Bu-6.jpg"),
      altText: "image",
      description: "Dance of Krishna Pichwai Painting",
      originalPrice: 10000,
      salePrice: 9000
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
      <div className="category" id='Literature'>
        <div className='literature_read'>
          <h2 style={{ paddingLeft: "0.3cm", paddingTop: "1cm", margin: "0" }}>Literature</h2>

          {products.length > initialDisplayLimit && (
            <Link to="/literature_full_product" className="more-items-link" onClick={toggleDisplayLimit} style={{ paddingRight: "0.3cm", paddingTop: "1cm", margin: "0", fontSize: "0.5cm" }} >
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

export default Literature;