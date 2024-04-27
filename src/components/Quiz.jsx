
// import React, { useState } from 'react'
// import { QuizData } from '../Data/QuizData'
// import QuizResult from './QuizResult';
// import "../styles/Quiz.css";
// function Quiz() {
//     const [currentQuestion,setCurrentQuestion]=useState(0);
//     const [score,setScore] = useState(0);
//     const [clickedOption,setClickedOption]=useState(0);
//     const [showResult,setShowResult]=useState(false);
    
//     const changeQuestion = ()=>{
//         updateScore();
//         if(currentQuestion< QuizData.length-1){
//             setCurrentQuestion(currentQuestion+1);
//             setClickedOption(0);
//         }else{
//             setShowResult(true)
//         }
//     }
//     const updateScore=()=>{
//         if(clickedOption===QuizData[currentQuestion].answer){
//             setScore(score+1);
//         }
//     }
//     const resetAll=()=>{
//         setShowResult(false);
//         setCurrentQuestion(0);
//         setClickedOption(0);
//         setScore(0);
//     }
//   return (
//     <div className='outer-box-app'>
//         <p className="heading-txt">Quiz APP</p>
//         <div className="container-txt">
//             {showResult ? (
//                 <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
//             ):(
//             <>
//             <div className="question-app">
//                 <span id="question-number">{currentQuestion+1}. </span>
//                 <span id="question-txt">{QuizData[currentQuestion].question}</span>
//             </div>
//             <div className="option-container">
//                 {QuizData[currentQuestion].options.map((option,i)=>{
//                     return(
//                         <button 
//                         // className="option-btn"
//                         className={`option-btn ${
//                             clickedOption == i+1?"checked":null
//                         }`}
//                         key={i}
//                         onClick={()=>setClickedOption(i+1)}
//                         >
//                         {option}
//                         </button>
//                     )
//                 })}                
//             </div>
//             <input type="button" value="Next" id="next-button-app" onClick={changeQuestion}/>
//             </>)}
//         </div>
//     </div>
//   )
// }

// export default Quiz




import React, { useState } from 'react';
import { QuizData } from '../Data/QuizData';
import QuizResult from './QuizResult';
import "../styles/Quiz.css";

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);
        } else {
            setShowResult(true);
        }
    };

    const updateScore = () => {
        const optionScore = [2, 1, 0]; // Scores for options: [1st, 2nd, 3rd]
        if (clickedOption > 0 && clickedOption <= 3) {
            setScore(score + optionScore[clickedOption - 1]);
        }
    };

    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    };

    return (
        <div className='outer-box-app'>
            {/* <p className="heading-txt">Quiz APP</p> */}
            <div className="container-txt">
                {showResult ? (
                    <QuizResult score={score} totalScore={40} tryAgain={resetAll} />
                ) : (
                    <>
                        <div className="question-app">
                            <h2 className="question-txt rounded border-2 py-1 px-2">{QuizData[currentQuestion].q}</h2>
                            <div>

                            <span id="question-number">{currentQuestion + 1}. </span>
                            <span id="question-txt" className='text-2xl font-bold'>{QuizData[currentQuestion].question}</span>
                            </div>
                        </div>
                        <div className="option-container">
                            {QuizData[currentQuestion].options.map((option, i) => {
                                return (
                                    <button
                                        className={`option-btn ${clickedOption === i + 1 ? "checked" : null}`}
                                        key={i}
                                        onClick={() => setClickedOption(i + 1)}
                                    >
                                        {option}
                                    </button>
                                );
                            })}
                        </div>
                        <input type="button" value="Next" id="next-button-app" onClick={changeQuestion} />
                    </>
                )}
            </div>
        </div>
    );
}

export default Quiz;
