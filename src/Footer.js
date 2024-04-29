import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot,faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import your CSS file

function Footer() {
    return (
        <div className="full-contact" id='Footer'>
            <div className="contact-list">
                <div className="one">
                    <h4>INFORMATION</h4>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Track your order</a></li>
                    </ul>
                </div>
                <div className="two">
                    <h4>SHOP</h4>
                    <ul>
                        <li><a href="#">Budget Friendly Wall Decor</a></li>
                        <li><a href="#">Relief Murals</a></li>
                        <li><a href="#">Canvas Painting</a></li>
                        <li><a href="#">Sculptures and Table Decor</a></li>
                    </ul>
                </div>
                <div className="three">
                    <h4>POLICIES</h4>
                    <ul>
                        <li><a href="#">Search</a></li>
                        <li><a href="#">Cancellation and Return Policy</a></li>
                        <li><a href="#">Shipping Policy</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of use</a></li>
                        <li><a href="#">Terms of services</a></li>
                        <li><a href="#">Refund policy</a></li>
                    </ul>
                </div>
                <div className="four">
                    <h4>COMMUNICATION</h4>
                    <p className='address'>
                        <FontAwesomeIcon icon={faLocationDot} />
                        KPR Institute of Engineering and Technology, <br />
                        Arasur, <br />
                        Coimbatore.
                    </p>
                    <div className="mail">
                        <h4>
                            <a href="mailto:krishzaara1985@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} /> krishzaara1985@gmail.com
                            </a>
                        </h4>
                    </div>
                    <div className="contact">
                        <h4><FontAwesomeIcon icon={faPhone} /> +91 8148196646</h4>
                    </div>
                    <div className="social">
                        <h4>SOCIAL</h4>
                        <div className="icon">
                            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="https://www.instagram.com/shri_afreshhomeinteriors" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <h4 className="copyright">copyright <FontAwesomeIcon icon={faCopyright} /> 2024 Company Name</h4>
        </div>
    );
}

export default Footer;
