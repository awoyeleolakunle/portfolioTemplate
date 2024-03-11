import React, { useState } from "react";
import "../header/header.css";
import Button from "../button/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <nav className={`navigation ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </nav>
      <Button className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Button>
    </div>
  );
};

export default Header;
