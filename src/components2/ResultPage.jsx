// ResultPage.js
import React from 'react';
import img from "../assests2/result.jpeg"
import { useLocation } from 'react-router-dom';
import "../styles2/result.css";
const ResultPage = () => {

  const location = useLocation();
  console.log(location.state);
  const formData = location.state?.formData || {};
  console.log(formData);

  return (
    <div id='ores'>
      <h1>Result Page</h1>
       {/* <p>Q.19: {formData.q19}</p> 
      <p>Q.20: {formData.q20}</p>  */}
      {/* Add more paragraphs for other formData properties */}
      <img id="result" src={img}/>
    </div>
  );
};

export default ResultPage;
