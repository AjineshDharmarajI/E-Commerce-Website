import React from 'react';
import './Header.css';
import Art_studio from './Art_Studio.png';

export default function Header() {
    return (
        <div className="main" id='Home'>
            <div className="main-heading">
                <div className='img'>
                <img src={Art_studio}></img>
                </div>
                <h1 className='aname'>E-Commerce Website</h1>
                <h3 className='aquotes'>Where Spirituality Meets Innovation</h3>
            </div>
            
            
        </div>
        
    );
}
