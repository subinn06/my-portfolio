import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} SubiDev. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;