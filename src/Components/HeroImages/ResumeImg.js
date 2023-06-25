import React from "react";
import "../../stylesheets/HeroImg2Styles.css";



const ResumeImg = () => {
    return (
        <div className="hero-container">
      <div className="hero-heading">
        <h1>Resume</h1>
        <p>To know more about my involvement refer to my attached resume.</p>
        <div className="res-btn">
        <a href={require("../../Assets/ResumeBharath.pdf")} download="Resume_Bharath">Download Resume</a>
</div>
      </div>
    </div>
    )
}

export default ResumeImg