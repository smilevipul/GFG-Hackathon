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
            <h1>Sharks Sign up</h1>
            <form method="POST">
              <div className="input_div">
                <i className="fa-solid fa-user"></i>
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="input_div">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className="input_div">
                <i className="fa-solid fa-phone"></i>
                <input
                  type="phone"
                  name="phone"
                  placeholder="Mobile Number"
                />
              </div>
              <div className="input_div">
                <i className="fa-solid fa-user-tie"></i>
                <input type="work" name="work" placeholder="Profession" />
              </div>
              <div className="input_div">
              <i class="fa-regular fa-dollar-sign"></i>
                <input type="income" name="income" placeholder="Income" />
              </div>

              <div className="input_div">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="input_div">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="cpassword"
                  name="cpassword"
                  placeholder="Confirm Password"
                />
              </div>

              <div className="input_div">
                <i className="fa-solid fa-phone"></i>
                <input
                  type="number"
                  name="number"
                  placeholder="Goverment id number"
                />
              </div>

              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Upload any valid goverment id
                </label>
                <input class="form-control" type="file" id="formFile" />
              </div>
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Upload Your Photo
                </label>
                <input class="form-control" type="file" id="formFile" />
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
