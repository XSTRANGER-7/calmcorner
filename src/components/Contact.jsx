import React from 'react';
import call from "../assests/img8.png";

function Contact() {
  return (
    <div className="home5" id="contact">
         <div className="lft">
            <h1>Contact Us</h1>
            <form>
            <div>
                <label for="name">Name : </label>
                <input type="text" placeholder="NAME" required id="name"/>
            </div>
            <div>
                <label for="cont">Contact No : </label>
                <input type="tel" placeholder="XXXXXXXXXX (10 Digits Mobile no.)" pattern= "[0-9]{10}" required id="cont"/>
            </div>
            <div>
                <label for="mail">Mail Id : </label>
                <input type="email" placeholder="XXXXXXX@gmail.com" required id="mail"/>
            </div>
            <div>
               <label for="myTextarea">Enter your Query:</label>
               <textarea id="myTextarea" rows="5" cols="40" placeholder="this is area where u can type your problem "/>
            </div> 
            <button>Submit</button>
            </form>
         </div>
         <div className="rgt">
            <img src= {call} alt="call"/>
         </div>
      </div>
  )
}

export default Contact
