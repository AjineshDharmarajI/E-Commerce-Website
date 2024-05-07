// ProductImageDescription.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './App.css';

const ProductImageDescription = ({ imgSrc, altText, description, originalPrice, salePrice,onImageClick }) => {


  const handleClick = () => {
    onImageClick(imgSrc);
  };
  return (
    <Link to="/Items"> {/* Use Link component to navigate to the cart page */}
      <div className="product-img-description">
        <img src={imgSrc} alt={altText} onClick={handleClick} width="250px" height="250px" />
        <p className="description">{description}</p>
        <p className="amount"><s>&#8377;{originalPrice}</s> &#8377;{salePrice}</p>
      </div>
    </Link>
  );
};

export default ProductImageDescription;
