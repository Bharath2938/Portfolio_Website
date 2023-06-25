import "../../stylesheets/HeroImgStyles.css";
import React from "react";
import IntroImg from "../../Assets/IntroImg.jpg";
import { Link } from "react-router-dom";
import IntroDp from "../../Assets/profilepic.jpeg"

const HeroImg = () => {
  return (
    <div className="hero-img-container">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="hero-content">
      <img className="pro-img" src={IntroDp} alt="profilePicture" />
        <p>I'm Bharath Kumar R</p>
        <h3>I'm a React Developer</h3>

        <div>
          <Link to="/project" className="hero-btn">
            Projects
          </Link>
          <Link to="/resume" className="btn-light">
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
