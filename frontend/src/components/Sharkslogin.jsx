import React from "react";
import Button from "@mui/material/Button";
import loginimg from "../images/login.webp";
import {NavLink} from 'react-router-dom';
const Login = () => {
  return (
    <>
      <div className="logindiv">
        <div className="slogin">
          <div className="left">
            <img src={loginimg} alt="loginimg" />
            <Button variant="outlined">
            <NavLink to = "/shakssignup">
              Create Account
            </NavLink>
            </Button>
          </div>

          <div className="right">
            <h1>Login Form</h1>
            <form method="POST">
              <div>
                <i className="fa-solid fa-user"></i>
                <input type="email" name="email" placeholder="Your Email" />
              </div>
              <div>
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  placeholder="Your Password"
                />
              </div>
              <Button variant="outlined">Login</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
