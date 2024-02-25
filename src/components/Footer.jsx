
import React, { useState } from "react";
import bot from "../assests/bott.png";


const Footer = () => {
  const [message, setMessage] = useState("");
  const [botResponse, setBotResponse] = useState(""); 

    const [showButton, setShowButton] = useState(true);
    const [showBox, setShowBox] = useState(false);
  
    const toggleVisibility = () => {
      setShowButton(!showButton);
      setShowBox(!showBox);
    };
  
  const sendMessageToBot = async () => {
    
    try {
      const response = await fetch('http://localhost:5000/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      setBotResponse(data.bot_response);
    } catch (error) {
      console.error('Error sending message to bot:', error);
    }
  };

  return ( 
    <>
    {showButton && (<div className="circle" onClick={toggleVisibility}><img src={bot} /></div>)}
    
    {showBox && (<div className="chat-container">
        <input 
          type="text" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="Type your message here" 
        />
         <button className="chat-button" onClick={sendMessageToBot}>Send</button>
         <div className="chatbody">{botResponse && <div className="chat-box">{botResponse}</div>}</div>
        
      </div>)}
      </>
  );
}; 

export default Footer;
