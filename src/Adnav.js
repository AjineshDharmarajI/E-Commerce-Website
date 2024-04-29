import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './App1.css';
import TigerImage from './tiger.jpg';

export default function Adnav() {
  return (
    <nav className="nav">
      <div className='landing-page'>
        <div className='adlink'>
          <ul>
            <img className='adimg' src={TigerImage} alt="Tiger" />
            <li><Link to="/App1">Home</Link></li>
            <li><Link to="/Addproduct">Add Product</Link></li>
            <li><Link to="/Addpromotion">Add Promotion</Link></li> {/* Change href to Link */}
            <li><a href='#'>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
