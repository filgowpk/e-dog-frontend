import React from 'react';
import { Link } from 'react-router-dom';
import {FaUser} from 'react-icons/fa';
import './Header.css';
import logo from '../assets/logo.png';

function Header() {

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="E-Dog Logo" className="header-logo-img" />
        </Link>
      </div>
      <nav className="nav">
        <Link to="/quiz">Quiz</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/advice">Porady</Link>
        <Link to="/breeds">Rasy</Link>
        
        <a href="#">
          <FaUser size={24} color="#ffffff" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
