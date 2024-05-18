import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Ad_Footer.css'; // Import your CSS file

function Ad_Footer() {
    return (
        <div className="Ad_full-contact" id='Footer'>
            <div className="Ad_contact-list">


                <div className="Ad_con">
                    <div className='Ad_one'>
                        <h5 className='Ad_communication'>COMMUNICATION</h5>
                        <p className='Ad_address'>
                            <FontAwesomeIcon icon={faLocationDot} />
                            KPR Institute of Engineering and Technology, 
                            Arasur, 
                            Coimbatore.
                        </p>
                            <h4 className='Ad_mail'>
                                <a href="mailto:krishzaara1985@gmail.com">
                                    <FontAwesomeIcon icon={faEnvelope} /> krishzaara1985@gmail.com
                                </a>
                            </h4>
                            <h4 className='Ad_contact'><FontAwesomeIcon icon={faPhone} /> +91 8148196646</h4>
                    </div>
                    <div className='Ad_two'>
                        <div className="Ad_social">
                            <h5>SOCIAL</h5>
                            <div className="Ad_icon">
                                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="https://www.instagram.com/shri_afreshhomeinteriors" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className="Ad_copyright">copyright <FontAwesomeIcon icon={faCopyright} /> 2024 Company Name</h4>
            </div>
        </div>
    );
}

export default Ad_Footer;
