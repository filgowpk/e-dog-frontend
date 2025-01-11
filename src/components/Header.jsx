import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "./Header.css";
import logo from "../assets/logo.png";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleRegisterClick = () => {
    alert("Rejestracja będzie dostępna wkrótce.");
    setIsModalOpen(false);
  };

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

        <a href="#" onClick={handleModalToggle}>
          <FaUser size={24} color="#ffffff" />
        </a>
      </nav>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <div className="logo">
                <Link to="/">
                  <img
                    src={logo}
                    alt="E-Dog Logo"
                    className="modal-header-logo-img"
                  />
                </Link>
              </div>
              <a href="#" onClick={handleModalClose}>
                wróć
              </a>
            </div>
            <form>
              <label>
                Login/E-mail:
                <input type="text" name="email" />
              </label>
              <label>
                Hasło:
                <input type="password" name="password" />
              </label>
              <button type="submit" onClick={handleModalClose}>
                Zaloguj się
              </button>
            </form>
            <p>
              Nie masz konta?{" "}
              <a href="#" onClick={handleRegisterClick}>
                Zarejestruj się tutaj
              </a>
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
