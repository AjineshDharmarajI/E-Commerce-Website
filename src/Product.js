// Product.js
import React, { useState, useEffect } from 'react';
import ProductImageDescription from './ProductImageDescription';
import ProductIcons from './ProductIcons';

const Product = ({ id, imgSrc, altText, description, originalPrice, salePrice, addToCart, addToWishlist, cartItems, setCartItems, wishlistItems,onImageClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [cartClicked, setCartClicked] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(`wishlist_${id}`)) {
      setIsClicked(true);
    }
  }, [id]);

  useEffect(() => {
    if (cartItems && cartItems.some(item => item.id === id)) {
      setCartClicked(true);
    }
  }, [cartItems, id]);

  const handleHeartClick = () => {
    if (!isClicked) {
      addToWishlist({ id, imgSrc, altText, description, originalPrice, salePrice });
      localStorage.setItem(`wishlist_${id}`, JSON.stringify({ id, imgSrc, altText, description, originalPrice, salePrice }));
      setIsClicked(true);
    } else {
      const updatedItems = cartItems.filter(item => item.id !== id);
      setCartItems(updatedItems);
      localStorage.removeItem(`wishlist_${id}`);
      setIsClicked(false);
    }
  };

  const handleAddToCart = () => {
    if (cartClicked) {
      const updatedItems = cartItems.filter(item => item.id !== id);
      setCartItems(updatedItems);
      setCartClicked(false);
    } else {
      addToCart({ id, imgSrc, altText, description, originalPrice, salePrice, quantity: 1 });
      setCartClicked(true);
    }
  };


  

  return (
    <div className="productimg">
      <ProductImageDescription
        imgSrc={imgSrc}
        altText={altText}
        description={description}
        originalPrice={originalPrice}
        salePrice={salePrice}
        onImageClick={onImageClick}
        handleHeartClick={handleHeartClick}
      />
      <ProductIcons
        isClicked={isClicked}
        cartClicked={cartClicked}
        handleHeartClick={handleHeartClick}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default Product;
