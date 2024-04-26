import React from 'react'; 
// import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
        <h1>Calm Corner</h1>
        <main>
            <HashLink to = {"/#home"}>Home</HashLink>
            <HashLink to = {"/#blogs"}>Blogs</HashLink> 
            <HashLink to = {""}>VR Room</HashLink>
            <HashLink to = {"/#team"}>Team</HashLink>
            <HashLink to = {"/contact"}>Contact</HashLink> 
            <HashLink id='login' to = {"/login"}>Login</HashLink>
        </main>
    </nav>
  )
}

export default Header
