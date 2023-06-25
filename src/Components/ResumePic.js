import React from "react";
import "../stylesheets/ResumePicStyles.css";
import ResImje from "../Assets/ResImgs.jpg";
import {BiLeftArrow ,BiRightArrow} from "react-icons/bi";

const ResumePic = () => {
    return(
        <div className="res-main-cont">
            <h1><span><BiLeftArrow className="res-main-cont-logo" /></span>Resume<span><BiRightArrow  className="res-main-cont-logo"/></span></h1>
            <div className="res-pic-cont">
              <img src={ResImje} alt="Resume-Image" />
            </div>
            
        </div>
    )
}

export default ResumePic