import React from "react";  
import im from "../assets/img4.png";

const Register = () => {
  return (
    <div className="form-body">
      <div className="form-page">
        <div className="left">
          <form className="loginform">
            <div className="up">
              <h1>Register</h1>
            </div>
            <div className="dwn">
              <label for="mail">Mail ID</label>
              <input type="email" id="mail" placeholder="Enter Your Maid Id"/> 
              <label for="mail">Password</label>
              <input type="password" id="pass" placeholder="Enter Your Password"/>
              <label for="mail">Confirm Password</label>
              <input type="password" id="cpass" placeholder="Enter Your Password"/> 
            </div>
              <div className="dwn1">
               <button className='loginbtn' type="button">Register</button>
               <div className="new">Already Registered?<span>h</span> <a href="/">Click Here</a></div>
              </div>
          </form>
        </div>
        <div className="right">
          <img src={im} alt="logimage" />
        </div>
      </div>
    </div>
  );
};

export default Register;
