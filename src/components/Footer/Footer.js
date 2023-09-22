import React from "react";
import small_logo from "../Assets/small_logo.png"; // Import the image correctly
import "./Footer.css"; // Import the stylesheet for your footer

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="footer-section">
        <div className="footer-image">
        <img src={small_logo} alt="Company Logo" />
        </div>
        <div className="footer-info">
          <h3>Contact Information</h3>
          <p>Address: 123 Main Street, City, Country</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Email: info@example.com</p>
        </div>
        <div className="footer-info">
          <h3>Social Media Links</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
