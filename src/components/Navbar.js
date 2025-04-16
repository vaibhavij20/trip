// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link for routing
import "@fortawesome/fontawesome-free/css/all.min.css";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/" className="navbar__logo-link" aria-label="Homepage">
          Trippy
        </Link>
      </div>
      <ul className="navbar__links">
        <li className="navbar__item">
          <Link to="/" className="navbar__link" aria-label="Home">
            <i className="fas fa-home" aria-hidden="true"></i> {/* Font Awesome icon */}
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/about" className="navbar__link" aria-label="About">
            <i className="fas fa-info-circle" aria-hidden="true"></i> {/* Font Awesome icon */}
            About
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/services" className="navbar__link" aria-label="Services">
            <i className="fas fa-briefcase" aria-hidden="true"></i> {/* Font Awesome icon */}
            Service
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/trip-planner" className="navbar__link" aria-label="Trip Planner">
            <i className="fas fa-calendar-alt" aria-hidden="true"></i> {/* Font Awesome icon */}
            Trip Planner
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/travel-gallery" className="navbar__link" aria-label="Travel Gallery">
            <i className="fas fa-images" aria-hidden="true"></i> {/* Font Awesome icon */}
            Travel Gallery
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/dashboard" className="navbar__link" aria-label="Dashboard">
            <i className="fas fa-chart-line" aria-hidden="true"></i>
            Dashboard
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/contact" className="navbar__link" aria-label="Contact">
            <i className="fas fa-phone" aria-hidden="true"></i> {/* Font Awesome icon */}
            Contact
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/signup" className="navbar__link navbar__signup" aria-label="Sign Up">
            Sign Up
          </Link>
        </li>
        {/* Info icon (optional) */}
        <li className="navbar__item navbar__info-item">
          <Link to="/info" className="navbar__link" aria-label="Information">
            <i className="fas fa-question-circle" aria-hidden="true"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
