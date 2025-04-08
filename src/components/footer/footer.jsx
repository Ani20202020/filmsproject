import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Movie Explorer. All rights reserved.</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://github.com/Ani20202020/filmsproject.git" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github"></i>
                </a>
       
              </div>
      </div>
    </footer>
  );
};

export default Footer;
