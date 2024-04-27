import React from 'react';
import img from "../assests/res.jpeg";
function QuizResult(props) {
  return (
    <>
    <div className='flex flex-col gap-10px'>
    </div>

    <img src={img}/>
    <div className='show-score'>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore}
    </div> 
    <button id="next-button-app" onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult