import React from "react";
 import Header from "./components/Header";
 import Home from "./components/Home"; 
 import Footer from "./components/Footer";
 import {BrowserRouter as Router ,Routes, Route} from "react-router-dom";
 import Login from "./components/Login";
 import Register from "./components/Register";
 import Contact from "./components/Contact";        
 import Footer2 from "./components/Footer2";
 import "./styles/App.scss"; 
 import "./styles/header.scss";
 import "./styles/login.scss";
 import "./styles/register.scss";
 import "./styles/home.scss";
 import "./styles/Footer.scss";
 import "./styles/Footer2.scss";
 import "./styles2/questionform.css";
 import "./styles/mediaquries.scss";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/login" element = {<Login/>}/>  
        <Route path="/register" element = {<Register/>}/>
      </Routes>
      <Footer/>
      <Footer2/>
    </Router>
  );
}

export default App;

