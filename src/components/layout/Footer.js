import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-branding">
          <Link to="/" className="footer-logo">Jillian Hohman</Link>
        </div>
        
        <div className="footer-nav-section">
          <h3>Navigation</h3>
          <div className="footer-nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        
        <div className="footer-contact-section">
          <h3>Contact</h3>
          <p>jillian.hohman@example.com</p>
          <p>San Francisco, CA</p>
        </div>
        
        <div className="footer-social-section">
          <a href="https://linkedin.com/in/jillianhohman" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" title="Dribbble">
            <FontAwesomeIcon icon={faDribbble} />
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Jillian Hohman. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 