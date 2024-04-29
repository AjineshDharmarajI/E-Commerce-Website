import React from 'react';
import './App.css';
import Art from './Art_Studio.png'

export default function Main() {
    return (
        <div className="main" id='Home'>
            <div className="main-heading">
                <div className='img'>
                <img src={Art} alt="" width="25%" height="30%"/>
                </div>
                <h1>SHRI - A FRESH HOME INTERIORS</h1>
                <h3>Where Spirituality Meets Innovation</h3>
            </div>
            {/* <div className="image">
                <img src={backgroundImage} alt="" width="400rem" height="400rem" />
            </div> */}
            {/* <div class="add">
        <img src={backgroundImage} alt=""/>
    </div> */}
        </div>
        
    );
}
