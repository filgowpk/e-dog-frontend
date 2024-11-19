import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaTwitter} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="E-Dog Logo" className="footer-logo-img" />
        <p>&copy; 2024 E-dog by edog sp. z o.o.</p>
      </div>
      <div className="footer-links">
        <a href="#faq">FAQ</a>
        <a href="#terms">Warunki użytkowania</a>
        <a href="#cookies">Pliki cookies</a>
      </div>
      <div className="footer-contact">
        <p>Kontakt</p>
        <div className="contact-item">
          <FaEnvelope size={16} /> edog@gmail.com
        </div>
        <div className="contact-item">
          <FaPhone size={16} /> 123 123 123
        </div>
      </div>
      <div className="footer-social">
        <p>Znajdź nas na</p>
        <div className="social-icons">
          <a href="#twitter"><FaTwitter size={24} /></a>
          <a href="#youtube"><FaYoutube size={24} /></a>
          <a href="#instagram"><FaInstagram size={24} /></a>
          <a href="#facebook"><FaFacebook size={24} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;