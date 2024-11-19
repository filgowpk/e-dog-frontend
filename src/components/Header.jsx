// src/components/Header.js
import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import logo_interface from '../assets/interface.png';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="E-Dog Logo" className="header-logo-img" />
      </div>
      <nav className="nav">
        <a href="#quiz">Quiz</a>
        <a href="#blog">Blog</a>
        <a href="#advice">Porady</a>
        <a href="#breeds">Rasy</a>
        <a href="$interface">
          <img src={logo_interface} alt="E-Dog Logo" className="header-logo_interface-img" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
