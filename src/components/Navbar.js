// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleFeatures = () => {
    setIsFeaturesOpen(!isFeaturesOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Trippy
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <div className="nav-links" onClick={toggleFeatures}>
              Features <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '5px' }} />
            </div>
            {isFeaturesOpen && (
              <div className="features-dropdown">
                <Link to="/trip-planner" className="dropdown-link" onClick={toggleMenu}>
                  Trip Planner
                </Link>
                <Link to="/travel-gallery" className="dropdown-link" onClick={toggleMenu}>
                  Travel Gallery
                </Link>
                <Link to="/booking" className="dropdown-link" onClick={toggleMenu}>
                  Book Travel
                </Link>
                <Link to="/preferences" className="dropdown-link" onClick={toggleMenu}>
                  Preferences
                </Link>
                <Link to="/reviews" className="dropdown-link" onClick={toggleMenu}>
                  Reviews
                </Link>
                <Link to="/dashboard" className="dropdown-link" onClick={toggleMenu}>
                  Dashboard
                </Link>
              </div>
            )}
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/auth" className="nav-links" onClick={toggleMenu}>
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
