// WishlistPage.js
import React from 'react';
import './whislist.css';
import { useState,useEffect } from 'react';

const WishlistPage = ({ wishlistItems, setWishlistItems, cartItems, setCartItems,updateCartItems, updateWishlist }) => {
  const deleteItem = (id) => {
    const updatedWishlistItems = wishlistItems.filter(item => item.id !== id);
    setWishlistItems(updatedWishlistItems);
    updateCartItems(updatedWishlistItems);
  };

  const handleMoveToCart = (id) => {
    const itemToMove = wishlistItems.find(item => item.id === id);
    if (itemToMove) {
      const updatedCartItems = [...cartItems, itemToMove];
      setCartItems(updatedCartItems);
      const updatedWishlistItems = wishlistItems.filter(item => item.id !== id);
      setWishlistItems(updatedWishlistItems);
    }
  };


  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(cartItems);
  }, [cartItems]);
  // const removeItem = (id) => {
  //   const updatedItems = items.filter(item => item.id !== id);
  //   setItems(updatedItems);
  //   updateCartItems(updatedItems);
  // };

  return (
    <div className='full-whislist'>
      <h1 className="wish">Wishlist</h1>
      <div className="wishlist-container">
        {wishlistItems.map(item => (
          <div className="wishlist-item" key={item.id}>
            <div className="image-container">
              <i className="fas fa-trash" onClick={() => deleteItem(item.id)}></i>
              <img src={item.imgSrc} alt={item.altText} />
            </div>
            <div className="product-name">
              <p>{item.description}</p>
            </div>
            <div className="price">
              <p>{item.salePrice}</p>
              <del>{item.originalPrice}</del>
            </div>
            <div className="line"></div>
            <button className="move-to-cart-btn" onClick={() => handleMoveToCart(item.id)}>
              Move to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
