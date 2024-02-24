import React, { useState } from 'react';
import img from "../assests2/img13.jpg";
import {Link} from "react-router-dom";

const Digestion = () => { 

  const [formData, setFormData] = useState({
    q13: '',
    q14: '',
  });
  
  const handleChange = (event) => {
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <div className='question-form'>
      <h1>Digestion</h1>
      <form>
        <div className="lft">
        <div className="form-group">
          <label htmlFor='q13' className='form-label'> Q.13: I lack appetite, or I eat obsessively. Ilost unwillingly a lot of weight or I have gained a lot in short time. </label>
          <div className='opt-group'>
            <div>
              <input type="radio" name='q13' value="2" id='q132' onChange={handleChange}/>
              <label for='q132' className='btnopt'>Always True</label>
            </div>
            <div>
              <input type="radio" name='q13' value="1" id='q131' onChange={handleChange}/>
              <label for='q131' className='btnopt'>Sometimes True</label>
            </div>
            <div>
              <input type="radio" name='q13' value="0" id='q130' onChange={handleChange}/>
              <label for='q130' className='btnopt'>Not True</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label for='q14' className='form-label'> Q.14: I have digestive problems. My stomach hurts or rumbles. I am bloated or gassy. I have acid reflux, heartburn, diarrhea or constipation.</label>
          <div className='opt-group'>
            <div>
              <input type="radio" name='q14' value="2" id='q142' onChange={handleChange}/>
              <label for='q142' className='btnopt'>Always True</label>
            </div>
            <div>
              <input type="radio" name='q14' value="1" id='q141' onChange={handleChange}/>
              <label for='q141' className='btnopt'>Sometimes True</label>
            </div>
            <div>
              <input type="radio" name='q14' value="0" id='q140' onChange={handleChange}/>
              <label for='q140' className='btnopt'>Not True</label>
            </div>
          </div>
        </div>
        </div>
        <div className="rgt">
          <img src={img} alt='img'/>
        </div>
      </form>
      <div className='btn-cover'><Link to="/pain" className='btn-1'><button className='btn' type="button" onClick={() => console.log(formData)}>Next</button></Link></div>
        
    </div>
  );
};

export default Digestion;

