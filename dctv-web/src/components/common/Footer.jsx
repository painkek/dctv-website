import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="plans">Plans</Link>
          </p>
          <p>
            <Link to="support">Support</Link>
          </p>
          <p>
            <Link to="branches">Branches</Link>
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>info@dctv.com.ph</p>
          <p>Telephone number: (52) 742-6781</p>
          <p>Email Address: info@dctv.com.ph</p>
        </div>
      </div>
      <p className="footer-bottom">
        All Rights Reserved | DCTV Cable Network & Broadband Services Inc.
      </p>
    </footer>
  );
};

export default Footer;
