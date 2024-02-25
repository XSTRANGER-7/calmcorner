import React from "react";  
import im from "../assests/img5.png";
import { useState } from "react";
import Validation from "./LoginValidation";
import  axios from "axios";
import {useNavigate} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Login = () => {

  const [values,setValues] = useState({
    email: "",
    password: ""
  });
 
  const navigate = useNavigate();
  const [errors,setErrors] = useState({})
 
  const handleSubmit = (event)=> {
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.email === "" && errors.password === ''){
      axios.post('http://localhost:8081/login', values)
      .then(res => {
        if(res.data === "Success"){
          navigate('/question');
        }
        else{
          alert("No Record Found");
        }
      })
      .catch(err => console.log(err));
   }
  }

  const handleInput = (event)=>{
    setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
  }

  return (
    <div className="form-body">
      <div className="form-page">
        <div className="left">
          <form className="loginform" onSubmit={handleSubmit}>
            <div className="up">
              <h1>Login</h1>
            </div>
            <div className="dwn">
              <label for="mail">Mail ID</label>
              <input type="email" id="mail" placeholder="Enter Your Maid Id" name="email" onChange={handleInput}/>
              {errors.email && <span className="text-danger">{errors.email}</span>} 
              <label for="pass">Password</label>
              <input type="password" id="pass" placeholder="Enter Your Password" name="password" onChange={handleInput}/>
              {errors.password && <span className="text-danger">{errors.password}</span>}
              <div className="forget">Forget Password?</div>
            </div>
              <div className="dwn1">
               <button className='loginbtn' type="submit" >Login</button>
               <div className="new">New User?<span>h</span> <HashLink to="/register">Click Here</HashLink></div>
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
