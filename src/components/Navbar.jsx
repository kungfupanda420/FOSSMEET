import React from 'react';
import './Navbar.css';
import DarkModeButton from './DarkModeButton';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h1 className="navbar-logo">My Gallery</h1>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact" className="contact">Contact</a></li>
          <li><DarkModeButton /></li>
        </ul>
      </nav>
      <hr className="navbar-divider" />
    </>
  );
};

export default Navbar;
