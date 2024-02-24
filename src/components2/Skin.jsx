import React, { useState } from 'react';
import img from "../assests2/img17.jpg";
import {Link,useNavigate} from "react-router-dom";
// import ResultPage from './ResultPage';

const Skin = () => { 

    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    q19: '',
    q20: '',
  });
  
  const handleChange = (event) => {
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value
    }));
  };

  const handleNextClick = async () => {
    // Navigate to the result page and pass formData as a prop
    console.log(formData);
    navigate('/result', { state: { formData } });
  };

  return (
    <div className='question-form'>
      <h1>Sex Life</h1>
      <form>
        <div className="lft">
        <div className="form-group">
          <label for='q19' className='form-label'> Q.19: My skin is irritated or itchy. I have acne. I get rashes and eczema. My wounds heal slowly. </label>
          <div className='opt-group'>
            <div>
              <input type="radio" name='q19' value="2" id='q192' onChange={handleChange}/>
              <label for='q192' className='btnopt'>Always True</label>
            </div>
            <div>
              <input type="radio" name='q19' value="1" id='q191' onChange={handleChange}/>
              <label for='q191' className='btnopt'>Sometimes True</label>
            </div>
            <div>
              <input type="radio" name='q19' value="0" id='q190' onChange={handleChange}/>
              <label for='q190' className='btnopt'>Not True</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label for='q20' className='form-label'> Q.20: My sex drive is lowered, or my sex drive is excessive.</label>
          <div className='opt-group'>
            <div>
              <input type="radio" name='q20' value="2" id='q202' onChange={handleChange}/>
              <label for='q202' className='btnopt'>Always True</label>
            </div>
            <div>
              <input type="radio" name='q20' value="1" id='q201' onChange={handleChange}/>
              <label for='q201' className='btnopt'>Sometimes True</label>
            </div>
            <div>
              <input type="radio" name='q20' value="0" id='q200' onChange={handleChange}/>
              <label for='q200' className='btnopt'>Not True</label>
            </div>
          </div>
        </div>
        </div>
        <div className="rgt">
          <img src={img} alt='img'/>
        </div>
      </form>
      <div className='btn-cover'><Link to="/result" className='btn-1'><button className='btn' type="button" onClick={handleNextClick} >Submit</button></Link></div>
        
    </div>
  );
};

export default Skin;

