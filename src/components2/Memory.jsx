import React, { useState } from 'react';
import img from "../assests2/img14.jpg";
import {Link} from "react-router-dom";

const Memory = () => { 

  const [formData, setFormData] = useState({
    q3: '',
    q4: '',
    q5: '',
  });
  
  const handleChange = (event) => {
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <div className='question-form'>
      <h1>Memory & Work</h1>
      <form>
        <div className="lft">
        <div className="form-group">
          <label htmlFor='q3' className='form-label'> Q.3: I get irritable, depressed, aggressive. </label>
          <div className='opt-group'>
            <div>
              <input type="radio" name='q3' value="2" id='q32' onChange={handleChange}/>
              <label for='q32' className='btnopt'>Always True</label>
            </div>
            <div>
              <input type="radio" name='q3' value="1" id='q31' onChange={handleChange}/>
              <label for='q31' className='btnopt'>Sometimes True</label>
            </div>
            <div>
              <input type="radio" name='q3' value="0" id='q30' onChange={handleChange}/>
              <label for='q30' className='btnopt'>Not True</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label for='q4' className='form-label'> Q.4: I have holes in memory, forget or confuse words, get distracted.</label>
          <div className='opt-group'>
            <div>
              <input type="radio" name='q4' value="2" id='q42' onChange={handleChange}/>
              <label for='q42' className='btnopt'>Always True</label>
            </div>
            <div>
              <input type="radio" name='q4' value="1" id='q41' onChange={handleChange}/>
              <label for='q41' className='btnopt'>Sometimes True</label>
            </div>
            <div>
              <input type="radio" name='q4' value="0" id='q40' onChange={handleChange}/>
              <label for='q40' className='btnopt'>Not True</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor='q5' className='form-label'> Q.5: I feel i work worse than i could. Quality is not so important for me anymore. I start working in the second part of my working day. </label>
          <div className='opt-group'>
            <div>
              <input type="radio" name='q5' value="2" id='q52' onChange={handleChange}/>
              <label for='q52' className='btnopt'>Always True</label>
            </div>
            <div>
              <input type="radio" name='q5' value="1" id='q51' onChange={handleChange}/>
              <label for='q51' className='btnopt'>Sometimes True</label>
            </div>
            <div>
              <input type="radio" name='q5' value="0" id='q50' onChange={handleChange}/>
              <label for='q50' className='btnopt'>Not True</label>
            </div>
          </div>
        </div>
        </div>
        <div className="rgt">
          <img src={img} alt='img'/>
        </div>
      </form>
      <div className='btn-cover'><Link to="/sleep" className='btn-1'><button className='btn' type="button" onClick={() => console.log(formData)}>Next</button></Link></div>
        
    </div>
  );
};

export default Memory;

