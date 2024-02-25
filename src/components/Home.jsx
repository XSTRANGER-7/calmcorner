import React from "react";
import img4 from "../assests/img14.jpg";
import img7 from "../assests/img17.jpg";
import img8 from "../assests/img18.png";
import img10 from "../assests/img20.png";
import call from "../assests/img8.png";
// import test from "../assests/test.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Home = () => {
  return (
    <>
      <div className="home" id="home">
        
        <Carousel infiniteLoop autoPlay showStatus = {false} showThumbs={false} showArrows={false} interval={1500}>
            <div>
                <img src={img7} alt="img"/> 
            </div>
            <div>
                <img src={img10} alt="img"/>
                {/* <p className="legend">Secure Your Data</p> */}
            </div>
            <div>
                <img src={img4} alt="img"/> 
            </div>
 
        </Carousel>
        
      </div>
      <div className="home2" id="blogs">
        <img src={img8} alt= "Img" />
        {/* <img src={test} alt= "Img" /> */}

        <div>
            <p>

Take control of your mental health with the help of technology and care.

Heiwa Habu is an easy-to-use tool that helps you understand and manage your emotions. With its friendly interface and cutting-edge technology, you can,

Track your mood and identify patterns.
Learn helpful coping strategies.
Get personalized support from qualified mentors.
What makes us unique?

Engaging AR experiences make learning and practicing self-care fun and interactive.
Real-time insights help you understand your emotions in the moment.
Tailored support fits your individual needs and preferences.
Start your journey to emotional well-being today with Heiwa Habu.
            </p>
        </div>
      </div>
      

      <div className="home4" id="about">
        <div className="who">
            <h1>Who are we ?</h1>
            <p>Welcome to our student wellness platform, where we prioritize your mental well-being throughout your academic journey. Understanding the challenges that students often face, we have developed a unique system that assesses your mental state and provides personalized guidance. Our cutting-edge technology employs innovative tools to analyze various facets of your mental health, allowing us to tailor our support to your individual needs. Alongside this, we connect you with experienced mentors who are dedicated to fostering a positive and supportive environment. These mentors serve as your guides, offering valuable insights, coping strategies, and a listening ear to help you navigate the complexities of student life. Join us on the path to mental wellness and academic success – because your well-being is paramount to your educational journey.</p>
            </div>
        <div className="what">
            <h1>What we do ?</h1>
            <p>At our platform, we go beyond conventional approaches to student support by harnessing the power of technology to quantify and understand the mental pressure students experience. Through advanced algorithms and assessments, we calculate your unique mental state, identifying areas of concern and stress. Once your mental profile is established, we connect you with a qualified mentor who specializes in addressing the challenges you may be facing. Our mentors serve as trusted guides, offering personalized solutions, coping mechanisms, and a supportive space for open dialogue. Whether it's academic stress, personal challenges, or general well-being, our goal is to provide holistic support tailored to your individual needs, ensuring that you thrive both academically and emotionally throughout your educational journey.</p>
            </div>
      </div>
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
    </>
  );
};

export default Home;