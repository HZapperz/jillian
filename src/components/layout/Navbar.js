import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          Jillian Hohman
        </NavLink>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`menu-icon-bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`menu-icon-bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`menu-icon-bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 