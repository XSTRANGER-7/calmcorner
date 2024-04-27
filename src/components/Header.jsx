import React from 'react'; 
// import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
        <h1>Calm Corner</h1>
        <main>
            <HashLink to = {"/#home"}>Home</HashLink>
            <HashLink to = {"https://psychology.feedspot.com/mental_health_blogs/"} target='_blank'>Blogs</HashLink> 
            <HashLink to = {"https://play.unity.com/mg/other/vr-meeting-room-1"} target='_blank'>VR Room</HashLink>
            <HashLink to = {"/#team"}>Team</HashLink>
            <HashLink to = {"/quiz"}>Your Score</HashLink>
            <HashLink to = {"/contact"}>Contact</HashLink> 
            <HashLink id='login' to = {"/login"}>Login</HashLink>
        </main>
    </nav>
  )
}

export default Header
