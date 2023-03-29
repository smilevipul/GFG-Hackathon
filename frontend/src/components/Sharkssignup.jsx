import React from "react";
import sugnupimg from "../images/signin.webp";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const Sharkssignup = () => {
  return (
    <>
      <div className="signupmaindiv">
        <div className="sharkssignup">
          <div className="left">
            <h1>Sign up</h1>
            <form method="POST">
              <div className="input_div">
                <i className="fa-solid fa-user"></i>
                <input type="text" name="name" placeholder="Your Name" />
              </div>
              <div className="input_div">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" name="email" placeholder="Your Email" />
              </div>
              <div className="input_div">
                <i className="fa-solid fa-phone"></i>
                <input
                  type="phone"
                  name="phone"
                  placeholder="Your Mobile Number"
                />
              </div>
              <div className="input_div">
                <i className="fa-solid fa-user-tie"></i>
                <input type="work" name="work" placeholder="Your Profession" />
              </div>
              <div className="input_div">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  placeholder="Your Password"
                />
              </div>
              <div className="input_div">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="cpassword"
                  name="cpassword"
                  placeholder="Your Confirm Password"
                />
              </div>
              <Button variant="outlined" type="submit" className="leftbtn">
                register
              </Button>
            </form>
          </div>
          <div className="right">
            <img src={sugnupimg} alt="" />
            <Button variant="outlined" type="submit">
                <NavLink to="/sharkslogin">Already Registered</NavLink>
              </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sharkssignup;
