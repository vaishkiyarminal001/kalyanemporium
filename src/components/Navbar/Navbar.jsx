import React, { useState } from "react";
import "./Navbar.css";
import "./About.css";

import Video from "./Video";
import About from "./About";
import Service from "./Service";
import Do from "./Do";
import Best from "./Best";
import Contact from "./Contact";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Kalyan Emporium</div>

      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/products">Products</a>
        <a href="/contact">Contact</a>
      </div>

      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <Video/>
      <About/>
      <Service/>
      <Best/>
      <Do/>
      <Contact/>
    </nav>


  );
}

export default Navbar;
