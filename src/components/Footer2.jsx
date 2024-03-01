import React from 'react';
import { AiOutlineMail, AiOutlineWhatsApp, AiOutlineTwitter, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import audi from "../assests/audi1.mp3";
import qr2 from "../assests/qr2.jpg";
import {HashLink} from "react-router-hash-link";

const Footer2 = () => {
  return (
    <footer>
        <div className="lefty">
        <h2>HeiwaHabu</h2>
        <p>@all rights reserved</p>
        <audio src={audi} autoPlay controls loop/>
        
      </div>
      <div className="righty">
        <h3>Follow us on </h3>
        <p>HeiwaHabu@gmail.com</p>
        <div className='linky'>
        <HashLink to = {"mailto:rajsingh76554@gmail.com"} ><AiOutlineMail /></HashLink>
        <HashLink to = {"https://chat.whatsapp.com/Fo5SCDf0NNj1IzGHoYfLl2"} > <AiOutlineWhatsApp /></HashLink>
        <HashLink to = {"https://x.com/Rastogi2004"} > <AiOutlineTwitter /></HashLink>
        <HashLink to = {"https://github.com/YASH-YADAV-dynamo"} > <AiOutlineGithub /></HashLink>
        <HashLink to = {"https://www.instagram.com/raj_thakur004"} > <AiOutlineInstagram /></HashLink>
        <HashLink to = {"https://www.linkedin.com/in/sarthak-stranger/"} > <AiOutlineLinkedin /></HashLink>
        </div>
        
      </div>

       <div className="qr2"> 
       <h3>Something special</h3>
         <img src={qr2} id='qr2'/>
        </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.873742274478!2d77.49449147620716!3d28.753186378590122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf574d18f2b6f%3A0x4a65c0bc0122eb2f!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1709029821795!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </footer>
  )
}

export default Footer2;
