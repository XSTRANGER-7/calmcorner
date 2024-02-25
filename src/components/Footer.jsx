import React from "react";
import audi from "../assests/audi1.mp3";
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineTwitter, AiOutlineWhatsApp } from "react-icons/ai";
const Footer = () => {
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
        <AiOutlineTwitter/>
        <AiOutlineGithub/>
        <AiOutlineInstagram/>
        <AiOutlineLinkedin/>
      </div>
      <audio controls autoPlay loop preload="auto" src={audi}/>
    </footer>
  );
};

export default Footer;