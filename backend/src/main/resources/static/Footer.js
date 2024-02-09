import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <h3>Top Destinations</h3>
        <ul>
          <li>Hotels in Las Vegas</li>
          <li>Hotels in New York</li>
          {/* ... More destinations */}
        </ul>
      </div>

      <div className="footer-row">
        <h3>Top Countries & Regions</h3>
        <ul>
          <li>Hotels in Aruba</li>
          <li>Hotels in Turks and Caicos</li>
          {/* ... More countries & regions */}
        </ul>
      </div>

      <div className="footer-row">
        <h3>Support & FAQs</h3>
        <ul>
          <li>Your bookings</li>
          <li>FAQs</li>
          {/* ... More support items */}
        </ul>
      </div>

      <div className="footer-row">
        <h3>For Suppliers, Affiliates and the Media</h3>
        <ul>
          <li>Affiliate with us</li>
          <li>Expedia Partner Solutions</li>
          {/* ... More information */}
        </ul>
      </div>

      <div className="footer-row">
        <h3>Policies</h3>
        <ul>
          <li>Terms & Conditions</li>
          <li>Privacy</li>
          {/* ... More policies */}
        </ul>
      </div>

      <div className="footer-row">
        <h3>Other information</h3>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          {/* ... More information */}
        </ul>
      </div>

      <p className="footer-credits">© 2024 MySite. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
