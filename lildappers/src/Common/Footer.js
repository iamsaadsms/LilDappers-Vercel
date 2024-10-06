import React from 'react';
import './Footer.css';
import logo from '../Media/logo.png';
import visa from '../Media/visa.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-elements">
        <div className="contact-footer">
          <span id="contact-title">GET IN TOUCH</span>
          <span><i className="bi bi-telephone phone"></i>
          <span id="cell-number">0332 2680472</span></span>
          <div className="contact-div-2">
            <span><i className="bi bi-envelope mail"></i>
            <span id="email-address">lil-dappers@gmail.com</span></span>
          </div>
        </div>
        <div className="link-footer">
          <span id="link-title">LINKS</span>
          <a href="Contact Us.html" target="_blank"><span className="footer_links">Contact Us</span></a>
          <a href="#" target="_blank"><span className="footer_links">About Us</span></a>
          <a href="#" target="_blank"><span className="footer_links">Shipping Policy</span></a>
          <a href="#" target="_blank"><span className="footer_links">Return & Exchange Policy</span></a>
        </div>
        <div className="connect-footer">
          <span id="connect-title">CONNECT WITH US</span>
          <div className="social_links">
            <a className="s_link" href="https://www.facebook.com/lildappers" target="_blank"><i className="bi bi-facebook s-icon"></i></a>
            <a className="s_link" href="https://www.instagram.com/lil_dappers/" target="_blank"><i className="bi bi-instagram s-icon"></i></a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-section2">
        <div className="payment-icons">
          <img src={visa} id="pay-icons" alt="Payment Icons" />
        </div>
        <div className="copyrights">
          <img id="footer-logo" src={logo} alt="Footer Logo" />
          <span>&nbsp;&nbsp;Copyright © 2024 Lil' Dappers. All Rights Reserved.&nbsp;&nbsp;|&nbsp;&nbsp;Developed By Blue Pexels.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
