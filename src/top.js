// Example of top.js with Tiger exported as a named export
import React from 'react'
import './top.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import TigerImage from './tiger.jpg'; // Import Tiger image


export const Tiger = TigerImage; // Export Tiger image as a named export

export default function Top() {
    return (
        <>
         <div className='full1'>
            <div>
                <div className='logo'><img src={Tiger}></img></div>
            </div>
            <div className='icon'>
              <a>
                <FontAwesomeIcon icon={faUser} />
              </a>
              <a><FontAwesomeIcon icon={faCartShopping} /></a>
              <a><FontAwesomeIcon icon={faHeart} /></a>
            </div>
            </div>
            
        </>
    )
}
