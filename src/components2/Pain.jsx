import React, { useState } from 'react';
// import img from "../assets2/img14.jpg";
import img from "../assests2/img14.jpg";
import {Link} from "react-router-dom";

const Pain = () => { 

  const [formData, setFormData] = useState({
    q15: '',
    q16: '',
  });
  
  const handleChange = (event) => {
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <div className='question-form'>
      <h1>Pain</h1>
      <form>
        <div className="lft">
        <div className="form-group">
          <label htmlFor='q15' className='form-label'> Q.15: I get headaches suddenly without any clear reason. </label>
          <div className='opt-group'>
            <div>
              <input type="radio" name='q15' value="2" id='q152' onChange={handleChange}/>
              <label for='q152' className='btnopt'>Always True</label>
            </div>
            <div>
              <input type="radio" name='q15' value="1" id='q151' onChange={handleChange}/>
              <label for='q151' className='btnopt'>Sometimes True</label>
            </div>
            <div>
              <input type="radio" name='q15' value="0" id='q150' onChange={handleChange}/>
              <label for='q150' className='btnopt'>Not True</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label for='q16' className='form-label'> Q.16: I have sore muscles even without much activity. My back or neck hurts.There's some tension between my shoulders.</label>
          <div className='opt-group'>
            <div>
              <input type="radio" name='q16' value="2" id='q162' onChange={handleChange}/>
              <label for='q162' className='btnopt'>Always True</label>
            </div>
            <div>
              <input type="radio" name='q16' value="1" id='q161' onChange={handleChange}/>
              <label for='q161' className='btnopt'>Sometimes True</label>
            </div>
            <div>
              <input type="radio" name='q16' value="0" id='q160' onChange={handleChange}/>
              <label for='q160' className='btnopt'>Not True</label>
            </div>
          </div>
        </div>
        </div>
        <div className="rgt">
          <img src={img} alt='img'/>
        </div>
      </form>
      <div className='btn-cover'><Link to="/relationship" className='btn-1'><button className='btn' type="button" onClick={() => console.log(formData)}>Next</button></Link></div>
        
    </div>
  );
};

export default Pain;


