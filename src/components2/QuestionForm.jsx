import React, { useState } from 'react';
import img from "../assests2/img11.jpg";
import {Link} from "react-router-dom";

const QuestionForm = () => { 

  const [formData, setFormData] = useState({
    q1: '',
    q2: '',
  });
  
  const handleChange = (event) => {
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <div className='question-form'>
      <h1>Anxiety</h1>
      <form>
        <div className="lft">
        <div className="form-group">
          <label htmlFor='q1' className='form-label'> Q.1: I am anxious for no reason. I feel others judge me, they are hostile to me or they treat me badly. </label>
          <div className='opt-group'>
            <div>
              <input type="radio" name='q1' value="2" id='q12' onChange={handleChange}/>
              <label for='q12' className='btnopt'>Always True</label>
            </div>
            <div>
              <input type="radio" name='q1' value="1" id='q11' onChange={handleChange}/>
              <label for='q11' className='btnopt'>Sometimes True</label>
            </div>
            <div>
              <input type="radio" name='q1' value="0" id='q10' onChange={handleChange}/>
              <label for='q10' className='btnopt'>Not True</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label for='q2' className='form-label'> Q.2: I have obsessive thoughts. I can't get them out of me head. They keep coming back no matter what I do.</label>
          <div className='opt-group'>
            <div>
              <input type="radio" name='q2' value="2" id='q22' onChange={handleChange}/>
              <label for='q22' className='btnopt'>Always True</label>
            </div>
            <div>
              <input type="radio" name='q2' value="1" id='q21' onChange={handleChange}/>
              <label for='q21' className='btnopt'>Sometimes True</label>
            </div>
            <div>
              <input type="radio" name='q2' value="0" id='q20' onChange={handleChange}/>
              <label for='q20' className='btnopt'>Not True</label>
            </div>
          </div>
        </div>
        </div>
        <div className="rgt">
          <img src={img} alt='img'/>
        </div>
      </form>
      <div className='btn-cover'><Link to="/memory" className='btn-1'><button className='btn' type="button" onClick={() => console.log(formData)}>Next</button></Link></div>
        
    </div>
  );
};

export default QuestionForm;

