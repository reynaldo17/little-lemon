import React from 'react';
import './NavBar.css';
import littlelemon_logo from '../Assets/littlelemon_logo.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={littlelemon_logo} alt="Little Lemon Logo" className="logo" />
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/about">About</a>
        </li>
        <li className="navbar-item">
          <a href="/menu">Menu</a>
        </li>
        <li className="navbar-item">
          <a href="/bookings">Bookings</a>
        </li>
        <li className="navbar-item">
          <a href="/order">Order</a>
        </li>
        <li className="navbar-item">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;