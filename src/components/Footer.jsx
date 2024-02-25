// import React from "react";
// import audi from "../assests/audi1.mp3";
// import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineTwitter, AiOutlineWhatsApp } from "react-icons/ai";
// const Footer = () => {
//   return (
//     <footer>
//       <div className="lefty">
//         <h2>HeiwaHabu</h2>
//         <p>@all rights reserved</p>
//         <h3>Follow us on </h3>
//         <p>HeiwaHabu@gmail.com</p>
//       </div>
//       <div className="righty">
//         <AiOutlineMail />
//         <AiOutlineWhatsApp />
//         <AiOutlineTwitter/>
//         <AiOutlineGithub/>
//         <AiOutlineInstagram/>
//         <AiOutlineLinkedin/>
//       </div>
//       <audio controls autoPlay loop preload="auto" src={audi}/>
//     </footer>
//   );
// };

// export default Footer;

import React, { useState } from "react";
import { AiOutlineMail, AiOutlineWhatsApp, AiOutlineTwitter, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  const [message, setMessage] = useState("");
  const [botResponse, setBotResponse] = useState("");
  
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
    <footer>
      <div className="lefty">
        <h2>HeiwaHabu</h2>
        <p>@all rights reserved</p>
        <h3>Follow us on </h3>
        <p>HeiwaHabu@gmail.com</p>
      </div>
      <div className="righty">
        <AiOutlineMail />
        <AiOutlineWhatsApp />
        <AiOutlineTwitter />
        <AiOutlineGithub />
        <AiOutlineInstagram />
        <AiOutlineLinkedin />
      </div>
      <div>
        <input 
          type="text" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="Type your message here" 
        />
        <button onClick={sendMessageToBot}>Send</button>
        {botResponse && <p>{botResponse}</p>}
      </div>
    </footer>
  );
};

export default Footer;