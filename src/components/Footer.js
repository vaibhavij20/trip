// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Why Trippy?</h3>
            <p>Your one-stop destination for seamless flight bookings.</p>
          </div>
          <div className="footer-column">
            <h3>Booking Flights with Trippy</h3>
            <p>Trippy makes it easy to book your flights online, comparing prices across multiple airlines, and finding the best deals for you.</p>
          </div>
          <div className="footer-column">
            <h3>Domestic Flights with Trippy</h3>
            <p>Book domestic flights with Trippy and experience a hassle-free, smooth travel journey within India.</p>
          </div>
        </div>

        <p className="copyright">&copy; {currentYear} TRIPPY PVT. LTD. Country India </p>
        <p className="developer-credits">Developed by: Vaibhavi Jaiswal, Aishwarya Sreenivasan, & Shubham Dubey</p>
      </div>
    </footer>
  );
};

export default Footer;
