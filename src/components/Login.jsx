import React from "react";  
import im from "../assets/img4.png";

const Login = () => {
  return (
    <div className="form-body">
      <div className="form-page">
        <div className="left">
          <form className="loginform">
            <div className="up">
              <h1>Login</h1>
            </div>
            <div className="dwn">
              <label for="mail">Mail ID</label>
              <input type="email" id="mail" placeholder="Enter Your Maid Id"/> 
              <label for="mail">Password</label>
              <input type="password" id="pass" placeholder="Enter Your Password"/>
              <div className="forget">Forget Password?</div>
            </div>
              <div className="dwn1">
               <button className='loginbtn' type="button">Login</button>
               <div className="new">New User?<span>h</span> <a href="/">Click Here</a></div>
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

export default Login;
