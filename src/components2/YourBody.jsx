import React, { useState } from 'react';
// import img from "../assets2/img10.jpg";
import img from "../assests2/img5.jpg";
import img2 from "../assests2/img10.jpg";
// import img2 from "../assets2/img9.jpg";
import {Link} from "react-router-dom";

const YourBody = () => { 

  const [formData, setFormData] = useState({
    q8: '',
    q9: '',
    q10: '',
    q11: '',
    q12: '',
  });
  
  const handleChange = (event) => {
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <div className='question-form'>
      <h1>Your Body</h1>
      <form>
        <div className="lft">
        <div className="form-group">
          <label htmlFor='q8' className='form-label'> Q.8: My heart starts racing suddenly and I feel slight tightness in my chest. My Blood Pressure is elevated for no clear reason.</label>
          <div className='opt-group'>
            <div>
              <input type="radio" name='q8' value="2" id='q82' onChange={handleChange}/>
              <label for='q82' className='btnopt'>Always True</label>
            </div>
            <div>
              <input type="radio" name='q8' value="1" id='q81' onChange={handleChange}/>
              <label for='q81' className='btnopt'>Sometimes True</label>
            </div>
            <div>
              <input type="radio" name='q8' value="0" id='q80' onChange={handleChange}/>
              <label for='q80' className='btnopt'>Not True</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label for='q9' className='form-label'> Q.9: I catch colds too easily and I am often sick with minor inflammations. I get a cold sore on my lips.</label>
          <div className='opt-group'>
            <div>
              <input type="radio" name='q9' value="2" id='q92' onChange={handleChange}/>
              <label for='q92' className='btnopt'>Always True</label>
            </div>
            <div>
              <input type="radio" name='q9' value="1" id='q91' onChange={handleChange}/>
              <label for='q91' className='btnopt'>Sometimes True</label>
            </div>
            <div>
              <input type="radio" name='q9' value="0" id='q90' onChange={handleChange}/>
              <label for='q90' className='btnopt'>Not True</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor='q10' className='form-label'> Q.10: I have cold or sweaty palms or feet. I get cold more often. </label>
          <div className='opt-group'>
            <div>
              <input type="radio" name='q10' value="2" id='q102' onChange={handleChange}/>
              <label for='q102' className='btnopt'>Always True</label>
            </div>
            <div>
              <input type="radio" name='q10' value="1" id='q101' onChange={handleChange}/>
              <label for='q101' className='btnopt'>Sometimes True</label>
            </div>
            <div>
              <input type="radio" name='q10' value="0" id='q100' onChange={handleChange}/>
              <label for='q100' className='btnopt'>Not True</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor='q11' className='form-label'> Q.11: I feel a lump in my throat. It's hard to breathe for no apparent reason. </label>
          <div className='opt-group'>
            <div>
              <input type="radio" name='q11' value="2" id='q112' onChange={handleChange}/>
              <label for='q112' className='btnopt'>Always True</label>
            </div>
            <div>
              <input type="radio" name='q11' value="1" id='q111' onChange={handleChange}/>
              <label for='q111' className='btnopt'>Sometimes True</label>
            </div>
            <div>
              <input type="radio" name='q11' value="0" id='q110' onChange={handleChange}/>
              <label for='q110' className='btnopt'>Not True</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor='q12' className='form-label'> Q.12: I lose my hair. I shed hair excessively. All my hairs are thin and break easily. </label>
          <div className='opt-group'>
            <div>
              <input type="radio" name='q12' value="2" id='q122' onChange={handleChange}/>
              <label for='q122' className='btnopt'>Always True</label>
            </div>
            <div>
              <input type="radio" name='q12' value="1" id='q121' onChange={handleChange}/>
              <label for='q121' className='btnopt'>Sometimes True</label>
            </div>
            <div>
              <input type="radio" name='q12' value="0" id='q120' onChange={handleChange}/>
              <label for='q120' className='btnopt'>Not True</label>
            </div>
          </div>
        </div>
        </div>
        <div className="rgt">
          <img src={img} alt='img'/>
          <img src={img2} alt='img'/>
        </div>
      </form>
      <div className='btn-cover'><Link to="/digestion" className='btn-1'><button className='btn' type="button" onClick={() => console.log(formData)}>Next</button></Link></div>
        
    </div>
  );
};

export default YourBody;


