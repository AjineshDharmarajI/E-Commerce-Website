// ProductIcons.js
import React from 'react';
import './App.css';

const ProductIcons = ({ isClicked, cartClicked, handleHeartClick, handleAddToCart }) => {
  return (
    <div className="iconbox">
      <i className={`fa-solid fa-heart ${isClicked ? 'clicked' : ''}`} onClick={handleHeartClick}></i>
      <i className={`fa-solid fa-cart-shopping ${cartClicked ? 'clicked' : ''}`} onClick={handleAddToCart}></i>
    </div>
  );
};

export default ProductIcons;
