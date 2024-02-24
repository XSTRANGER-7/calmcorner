import React from 'react'; 
// import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
        <h1>HEIWA HABU</h1>
        <main>
            <HashLink to = {"/#home"}>Home</HashLink>
            <HashLink to = {"/#blogs"}>Blogs</HashLink>
            <HashLink to = {"/question"}>Your Score</HashLink>
            <HashLink to = {"/#about"}>About</HashLink>
            <HashLink to = {"/#contact"}>Contact</HashLink>
        </main>
    </nav>
  )
}

export default Header