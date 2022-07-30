import React from 'react';
import './footer.css';
import gtp3Logo from '../../assets/logo.svg';


const Footer = () => {
    return ( 
        <div className='gpt3__footer section__padding'>
            <div className='gpt3__footer-heading'>
              <h1 className='gradient__text'>
                Do you want to step into the future
              </h1>
            </div>
            <div className='gpt3__footer-btn'>
                <p>Request Early Access</p>
            </div>
            <div className='gpt3__footer-links'>
                <div className='gpt3__footer-links_logo'>
                    <img src={gtp3Logo} alt='logo' />
                    <p>All rights Reserved.</p>
                </div>
                <div className='gpt3__footer-links_div'>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>COunters</p>
                    <p>Contact</p>
                </div>
                <div className='gpt3__footer-links_div'>
                    <h4>Company</h4>
                    <p>Terms & Condition</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className='gpt3__footer-links_div'>
                    <h4>Get in touch</h4>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>08-7524719</p>
                    <p>Overons</p>
                    <p>info@tester.com</p>
                </div>
            </div>
            <div className='gpt3__footer-copy'>
                <p>@ 2022 GPT-3. All right reserved</p>
            </div>
        </div>
     );
}
 
export default Footer;