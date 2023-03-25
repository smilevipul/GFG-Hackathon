import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul className="navlinks">
        <li id="logo">
            Sasta SharkTank
        </li>
        <li>
          <NavLink to="/" className="navlink"> Home </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="navlink">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="navlink">Contact</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
