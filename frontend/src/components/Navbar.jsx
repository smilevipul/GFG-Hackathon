import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <ul classNameName="navlinks">
        <li id="logo">
            Sasta SharkTank
        </li>
        <li>
          <NavLink to="/" classNameName="navlink"> Home </NavLink>
        </li>
        <li>
          <NavLink to="/about" classNameName="navlink">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" classNameName="navlink">Contact</NavLink>
        </li>
      </ul> */}

      <nav className="navbar navbar-expand-lg bg-body-tertiary " >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Sasta SharkTank
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/business">
                  Businesses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/sharks">
                  Sharks
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
