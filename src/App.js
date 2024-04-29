// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faUser, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Main from './Main';
import Art from './art.js';
import Literature from './Literature.js';
import Sculpture from './SCLUPTURE.js';
import Aesthetics from './AESTHECTICS.js';
import Music from './Music.js';
import Footer from './Footer.js';
import SignInSignUpForm from './sign.js';
import { useScroll } from './scroll.js';
import MyComponent from './color.js';
import Cart from './cart.js';
import Product from './Product.js';
import WishlistPage from './whislist.js';
import logo from './tiger.jpg';
import Items from './Items.js';
import App1 from './App1';
import AddProduct1 from './Addproduct';
import Payment_detail from './payment_details.js';
import AddPromotion from './Add_promotion';
import Art2 from './art_full_product.js';

function App() {
  const scrolled = useScroll();
  const [backgroundColor, setBackgroundColor] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [clickedImage, setClickedImage] = useState(null);

  const addToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);
  };

  const addToWishlist = (product) => {
    setWishlistItems(prevItems => [...prevItems, product]);
  };

  const handleImageClick = (imageUrl) => {
    setClickedImage(imageUrl);
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <div style={{ backgroundColor: backgroundColor }}>
        <React.Fragment>
          <Routes>
            <Route path="/signin" element={<SignInSignUpFormWithNavbar scrolled={scrolled} />} />
            <Route path="/" element={<MainWithNavbar scrolled={scrolled} addToCart={addToCart} addToWishlist={addToWishlist} cartItems={cartItems} setCartItems={setCartItems} wishlistItems={wishlistItems} handleImageClick={handleImageClick} />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} updateCartItems={setCartItems} />} />
            <Route path="/wishlist" element={<WishlistPage wishlistItems={wishlistItems} setWishlistItems={setWishlistItems} cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} addToWishlist={addToWishlist} updateCartItems={setCartItems} removeFromWishlist={removeFromWishlist} />} />
            <Route path="/items" element={<Items mainImage={clickedImage} />} />
            <Route path="/App1" element={<App1 />} />
            <Route path="/Addproduct" element={<AddProduct1 />} />
            <Route path="/payment_details" element={<Payment_detail />} />
            <Route path="/addpromotion" element={<AddPromotion />} />
            <Route path="/art" element={<Art />} />
            <Route path="/art_full_product" element={<Art2 addToCart={addToCart} addToWishlist={addToWishlist} cartItems={cartItems} setCartItems={setCartItems} onImageClick={handleImageClick} />} />

          </Routes>
        </React.Fragment>
      </div>
      <MyComponent setBackgroundColor={setBackgroundColor} />
    </Router>
  );
}

function MainWithNavbar({ scrolled, addToCart, addToWishlist, cartItems, setCartItems, wishlistItems, handleImageClick }) {
  return (
    <React.Fragment>
      <Navbar scrolled={scrolled} cartItems={cartItems} />
      <Main />
      <Art addToCart={addToCart} addToWishlist={addToWishlist} cartItems={cartItems} setCartItems={setCartItems} wishlistItems={wishlistItems} onImageClick={handleImageClick} />
      <Literature addToCart={addToCart} addToWishlist={addToWishlist} cartItems={cartItems} setCartItems={setCartItems} wishlistItems={wishlistItems} onImageClick={handleImageClick} />
      <Sculpture addToCart={addToCart} addToWishlist={addToWishlist} cartItems={cartItems} setCartItems={setCartItems} wishlistItems={wishlistItems} onImageClick={handleImageClick} />
      <Music addToCart={addToCart} addToWishlist={addToWishlist} cartItems={cartItems} setCartItems={setCartItems} wishlistItems={wishlistItems} onImageClick={handleImageClick} />
      <Aesthetics addToCart={addToCart} addToWishlist={addToWishlist} cartItems={cartItems} setCartItems={setCartItems} wishlistItems={wishlistItems} onImageClick={handleImageClick} />
      <Footer />
    </React.Fragment>
  );
}

function SignInSignUpFormWithNavbar({ scrolled }) {
  return (
    <React.Fragment>
      <SignInSignUpForm />
    </React.Fragment>
  );
}

function Navbar({ scrolled, cartItems }) {
  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className='landing-page'>
        <div>
          <img src={logo} alt='Logo' width="80px" height="80px" className='logo' />
        </div>
        <div className='link'>
          <ul>
            <li><a href='#Home'>Home</a></li>
            <div className="dropdown">
              <button className='dropbtn'>All Category<FontAwesomeIcon icon={faAngleDown} /></button>
              <div className="dropdown-content">
                <a href="#Art">ART</a>
                <a href="#Literature">LITERATURE</a>
                <a href="#Sculpture">SCULPTURE</a>
                <a href="#Music">MUSIC</a>
                <a href="#Aesthetics">AESTHETICS</a>
              </div>
            </div>
            <li><a href='#Footer'>Contact</a></li>
            <input placeholder='Search' type='text' className='search' />
          </ul>
        </div>
        <div className='icon'>
          <a href="/signin">
            <FontAwesomeIcon icon={faUser} />
          </a>
          <Link to='/cart'>
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
          <Link to='/wishlist'>
            <FontAwesomeIcon icon={faHeart} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default App;