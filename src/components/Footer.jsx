import React from "react";
import { Link } from "react-router-dom";
import "./css/Footer.css";

const Footer = () => {
  return (
    <>
      <div>
        <div className="footerIcons"></div>
        <footer className="site-footer">
          <section className="footer-links">
            <h2>Customer Care</h2>
            <Link to="/policies">Policies</Link>
            <Link to="/contact">Help</Link>
          </section>
          <section className="footer-links">
            <h2>About Me</h2>
            <Link to="/history">History</Link>
            <Link to="/blog">Blog</Link>
          </section>
        </footer>
      </div>
    </>
  );
};

export default Footer;
