// App1.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import AddProduct from './Addproduct';
import AddPromotion from './Add_promotion'; // Import AddPromotion component
import './App1.css';
import Body from './body'; // Corrected import
import Nav from './Adnav';

function App1() {
  return (
    <>
      <div id='ad-main'>
        <Nav />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/" element={<Body />} />
          <Route path="/Addproduct" element={<AddProduct />} />
          <Route path="/Addpromotion" element={<AddPromotion />} /> {/* Add route for AddPromotion */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App1;
