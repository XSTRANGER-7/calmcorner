import React from 'react';
import { AiOutlineMail, AiOutlineWhatsApp, AiOutlineTwitter, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import audi from "../assests/audi1.mp3";

const Footer2 = () => {
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
      <audio src={audi} autoPlay controls loop/>
    </footer>
  )
}

export default Footer2;
