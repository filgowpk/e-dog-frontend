import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';
import logo_interface from '../assets/interface.png';

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
        <a href="$interface">
          <img src={logo_interface} alt="Interface Logo" className="header-logo_interface-img" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
