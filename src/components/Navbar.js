// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../assets/logo.png"
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img
          src={logoImg}  // corrected the path to the logo
          alt="Site Logo"
          className="navbar-logo"
        />
        <span className="navbar-site-title">RentVault</span>
      </div>
      <ul className="navbar__links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/browse">Browse</Link></li>
        <li><Link to="/dashboard">Provider Dashboard</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
