import React from "react";
import { Link, NavLink } from "react-router-dom";
import hamburgerMenu from "../assets/menu.png";
function Navbar() {
  const hamburgerOpen = true;
  
  return (
    <div className="navbar">
      {/* <img src={hamburgerMenu} alt="" /> */}

      <NavLink to="/">HOME</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      <a href="https://github.com/Sule-Ss" target="_blank">
        GITHUB
      </a>
      <NavLink to="/login">LOG IN</NavLink>
    </div>
  );
}

export default Navbar;
