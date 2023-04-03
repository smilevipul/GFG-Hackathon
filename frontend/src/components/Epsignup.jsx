import React from "react";
import Sharkssignup from "./Sharkssignup";
import sugnupimg from "../images/signin.webp";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const Epsignup = () => {
  return (
    <>
      {/* <Sharkssignup/> */}

      <div className="epsignupmaindiv">
        <div className="epsharkssignup">
          <div className="left">
            <h1>Ep Sign up</h1>
            <form method="POST">
              <div className="form_left">
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
                  <input
                    type="work"
                    name="work"
                    placeholder="Your Profession"
                  />
                </div>

                <div className="input_div">
                  <i className="fa-solid fa-phone"></i>
                  <input
                    type="number"
                    name="profit"
                    placeholder="Required Amount"
                  />
                </div>
                <div className="input_div">
                  <i className="fa-solid fa-phone"></i>
                  <input
                    type="number"
                    name="equity"
                    placeholder="Exachange Equity"
                  />
                </div>

                <div className="input_div">
                  <i className="fa-solid fa-user"></i>
                  <input
                    type="text"
                    name="category"
                    placeholder="Business Category"
                  />
                </div>

                <div className="input_div">
                  <i className="fa-solid fa-phone"></i>
                  <input
                    type="income"
                    name="income"
                    placeholder="Monthly Income"
                  />
                </div>
                <div className="input_div">
                  <i className="fa-solid fa-phone"></i>
                  <input
                    type="profit"
                    name="profit"
                    placeholder="Monthly Profit"
                  />
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
              </div>

              <div className="form_right">
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

                <div class="mb-3">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="7"
                    placeholder="Future Plans"
                  ></textarea>
                </div>
                <Button variant="outlined" type="submit" className="leftbtn">
                  register
                </Button>
              </div>
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

export default Epsignup;
