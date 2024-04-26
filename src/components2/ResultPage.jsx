// ResultPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
const ResultPage = () => {

  const location = useLocation();
  console.log(location.state);
  const formData = location.state?.formData || {};
  console.log(formData);

  return (
    <div>
      <h1>Result Page</h1>
       <p>Q.19: {formData.q19}</p> 
      <p>Q.20: {formData.q20}</p> 
      {/* Add more paragraphs for other formData properties */}
    </div>
  );
};

export default ResultPage;
