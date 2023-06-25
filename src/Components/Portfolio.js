import React , {useState} from "react";
import "../stylesheets/PortfolioStyles.css";
import PortfolioImg from "../Assets/PortfoImg.png";
import {BiRightArrow } from "react-icons/bi";
import { MdKeyboardDoubleArrowRight , MdKeyboardDoubleArrowLeft} from "react-icons/md";

const Portfolio = () => {
  const [port,setPort] =  useState(false);
  const handlePort = () => setPort(!port);
  return (
    <div className="main-portf">
        <div className="main-head-port">
            <h1>Portfolio</h1>
            <p>"Your portfolio is a reflection of your journey, skills, and creativity."</p>
        </div>
    <div className="portfolio-container">
      <div className={port ? "port-symb port-symb-inact" : "port-symb port-symb-act"}>
        <h3>About This Website</h3>
        <img src={PortfolioImg} alt="port-img" className="port-symb-imge" />
        <button className="port-btn" onClick={handlePort} >About Portfolio</button>
      </div>
      <div className={port ? "port-details actives" : "port-details" }>
        <div className="port-content">
          <MdKeyboardDoubleArrowRight /> <MdKeyboardDoubleArrowRight /> <MdKeyboardDoubleArrowRight />
            <p><span><BiRightArrow /></span>"Once upon a time, in a bustling city, there was a diligent 
                and passionate mechanical engineer named Bharath. Bharath had 
                always been fascinated by the intricate workings of machines 
                and spent years honing their skills in the field. However, 
                deep down, there was a lingering curiosity about the world of 
                technology and software development."</p>
            <p>And that's how it all started ...</p>
            <p><span><BiRightArrow />This is a Responsive Portfolio website . . .</span></p>
            <p><span><BiRightArrow /></span>The WEBSITE was created by using</p>
            <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <ul>
              <li>React Functional Concepts</li>
              <li>React Hooks Concept</li>
              

            </ul>
            <li>Media Queries</li>

            </ul>
            <p><span><BiRightArrow />Also I have used the React Packages like</span></p>
            <ul>
              <li>React Bootstrap</li>
              <li>React Icons</li>
              <li>React Router</li>
            </ul>
            <p><span><BiRightArrow /></span>It takes around 3 Weeks to complete.</p>
            <MdKeyboardDoubleArrowLeft className="style-arrow-right" /><MdKeyboardDoubleArrowLeft className="style-arrow-right" /><MdKeyboardDoubleArrowLeft className="style-arrow-right" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Portfolio;
