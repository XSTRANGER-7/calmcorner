import React, { useState } from 'react';
import img from "../assests2/img5.jpg";
import {Link} from "react-router-dom";

const Sleep = () => { 

  const [formData, setFormData] = useState({
    q6: '',
    q7: '',
  });
  
  const handleChange = (event) => {
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <div className='question-form'>
      <h1>Sleep</h1>
      <form>
        <div className="lft">
        <div className="form-group">
          <label htmlFor='q6' className='form-label'> Q.6: I sleep worse than used to. I have problems falling asleep or I wake up at night. Or I sleep much too long. In the morning, I feel tired and lacking energy. </label>
          <div className='opt-group'>
            <div>
              <input type="radio" name='q6' value="2" id='q62' onChange={handleChange}/>
              <label for='q62' className='btnopt'> Always True</label>
            </div>
            <div>
              <input type="radio" name='q6' value="1" id='q61' onChange={handleChange}/>
              <label for='q61' className='btnopt'>Sometimes True</label>
            </div>
            <div>
              <input type="radio" name='q6' value="0" id='q60' onChange={handleChange}/>
              <label for='q60' className='btnopt'>Not True</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label for='q7' className='form-label'> Q.7: I grind my teeth or clench my jaws when I am asleep or stressed. I wake up in pain in my jaws. I have even cracked my teeth.</label>
          <div className='opt-group'>
            <div>
              <input type="radio" name='q7' value="2" id='q72' onChange={handleChange}/>
              <label for='q72' className='btnopt'>Always True</label>
            </div>
            <div>
              <input type="radio" name='q7' value="1" id='q71' onChange={handleChange}/>
              <label for='q71' className='btnopt'>Sometimes True</label>
            </div>
            <div>
              <input type="radio" name='q7' value="0" id='q70' onChange={handleChange}/>
              <label for='q70' className='btnopt'>Not True</label>
            </div>
          </div>
        </div>
        </div>
        <div className="rgt">
          <img src={img} alt='img'/>
        </div>
      </form>
      <div className='btn-cover'><Link to="/yourbody" className='btn-1'><button className='btn' type="button" onClick={() => console.log(formData)}>Next</button></Link></div>
        
    </div>
  );
};

export default Sleep;


