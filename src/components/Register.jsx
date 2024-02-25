import React from "react";  
import im from "../assests/img5.png";
import Validation from "./RegisterValidation";
import { useState } from "react"; 
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Register = () => {
  
  const [values,setValues] = useState({
    name: "",
    email: "",
    password: ""
  });
  
  const navigate = useNavigate();
  const [errors,setErrors] = useState({})
 
  const handleSubmit = (event)=> {
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.name === "" && errors.email === "" && errors.password === ''){
       axios.post('http://localhost:8081/register', values)
       .then(res => {
         navigate('/login');
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
          <form className="lognform" onSubmit={handleSubmit}>
            <div className="up">
              <h1 className="register">Register</h1>
            </div>
            <div className="dwn">
              <div className="form-grop">
              <label for="naam">Your Name</label>
              <input type="text" id="naam" placeholder="Enter Your Name" onChange={handleInput} name="name"/>
              {errors.name && <span className="text-danger">{errors.name}</span>} 

              </div>
              <div className="form-grop">
              <label for="mail1">Maild Id</label>
              <input type="mail" id="mail1" placeholder="Enter Your Mail Id" onChange={handleInput} name="email"/>
              {errors.email && <span className="text-danger">{errors.email}</span>}

              </div>
              <div className="form-grop">

              <label for="pass1">Password</label>
              <input type="password" id="pass1" placeholder="Enter Your Password" onChange={handleInput} name="password"/>
              {errors.password && <span className="text-danger">{errors.password}</span>} 
              <div className="forget">Forgot Password?</div>
              </div>
            </div>
              <div className="dwn1">
               <button className='loginbtn' id = "lbtn" type="submit">Register</button>
               <div className="new">Already Registered?<span>h</span> <HashLink to="/login">Click Here</HashLink></div>
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
