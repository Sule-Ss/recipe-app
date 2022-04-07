import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      {/* <img src={hamburgerMenu} alt="" /> */}

      <NavLink to="/">HOME</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      <a href="https://github.com/Sule-Ss" target="_blank">
        GITHUB
      </a>
      <NavLink to="/login">LOGOUT</NavLink>
    </div>
  );
}

export default Navbar;
