import React, { useState } from 'react';
import img from "../assests2/img16.jpg";
import {Link} from "react-router-dom";

const Pain = () => { 

  const [formData, setFormData] = useState({
    q17: '',
    q18: '',
  });
  
  const handleChange = (event) => {
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <div className='question-form'>
      <h1>Relationships</h1>
      <form>
        <div className="lft">
        <div className="form-group">
          <label htmlFor='q17' className='form-label'> Q.17: I resign from physical activity or spending time with friends due to lack of energy. </label>
          <div className='opt-group'>
            <div>
              <input type="radio" name='q17' value="2" id='q172' onChange={handleChange}/>
              <label for='q172' className='btnopt'>Always True</label>
            </div>
            <div>
              <input type="radio" name='q17' value="1" id='q171' onChange={handleChange}/>
              <label for='q171' className='btnopt'>Sometimes True</label>
            </div>
            <div>
              <input type="radio" name='q17' value="0" id='q170' onChange={handleChange}/>
              <label for='q170' className='btnopt'>Not True</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label for='q18' className='form-label'> Q.18: I start treating people more like objects. There's not much socializing going on. I have no time for chit Chats.</label>
          <div className='opt-group'>
            <div>
              <input type="radio" name='q18' value="2" id='q182' onChange={handleChange}/>
              <label for='q182' className='btnopt'>Always True</label>
            </div>
            <div>
              <input type="radio" name='q18' value="1" id='q181' onChange={handleChange}/>
              <label for='q181' className='btnopt'>Sometimes True</label>
            </div>
            <div>
              <input type="radio" name='q18' value="0" id='q180' onChange={handleChange}/>
              <label for='q180' className='btnopt'>Not True</label>
            </div>
          </div>
        </div>
        </div>
        <div className="rgt">
          <img src={img} alt='img'/>
        </div>
      </form>
      <div className='btn-cover'><Link to="/skin" className='btn-1'><button className='btn' type="button" onClick={() => console.log(formData)}>Next</button></Link></div>
        
    </div>
  );
};

export default Pain;

