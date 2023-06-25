import React, { useState , useEffect  } from "react";
import "../stylesheets/AboutmeStyles.css";
import { MdSchool } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { TbBuildingFactory } from "react-icons/tb";
import { BsFiles } from "react-icons/bs";
import IntroDp from "../Assets/profilepic.jpeg";
import html from "../Assets/Skill Assets/html5.png";
import css from "../Assets/Skill Assets/css3.png";
import js from "../Assets/Skill Assets/jslogo.png";
import reactjs from "../Assets/Skill Assets/reactjs.png";
import bootstrap from "../Assets/Skill Assets/bootstrap.png";
import github from "../Assets/Skill Assets/gitlogo.png";
import vk from "../Assets/Skill Assets/cricket.png";
import code from "../Assets/Skill Assets/fragmen.png";
import instag from "../Assets/Skill Assets/instag.png";
import linkin from "../Assets/Skill Assets/linkin.png";
import yoyo from "../Assets/Skill Assets/yoyo.png";

function AboutMe() {

  //Hobby Container Button Function:
  const [hob,setHob] = useState(false);
  const handleHob = () => setHob(!hob);


  //Skill Container Button Function:
  const [open,setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);



  return (
    <>
      <div className="main-about-sec">
        <div className="abt-imge-sec">
          <img className="abt-img-stl" src={IntroDp} alt="IntroImg" />
          <h4>React FrontEnd Developer</h4>
          <p>I'm a Self Taught Front End Developer</p>
        </div>
        <div className="abt-det-sec">
          <div className="abt-det-cont">
            <h1>About Me!</h1>
            <h3>
              <span>
                <MdSchool className="abt-icns" />
              </span>
              Education:
            </h3>
            <p>B.E Mechanical Engineering.</p>
            <h3>
              <span>
                <FaRegCalendarCheck className="abt-icns" />
              </span>
              Batch:
            </h3>
            <p>2014-2018</p>
            <div className="abt-skill-cont">
              <div className="skills-main-cont">
                <div className={open ? "skill-det-cont invbl" : "skill-det-cont  disp"}>
                  <div className="skill-btn-cont">
                    <button className={open ? "skill-btn up" : "skill-btn dwn"} onClick={handleOpen}>
                      <BsFiles style={{marginRight: "10px"}} />Skills
                    </button>
                  </div>
                  <div className={open ? "skill-det-list ips" : "skill-det-list ops"}>
                  
                  <DropDownItem img = {html} text = {"HTML5"} />
                  <DropDownItem img = {css} text = {"CSS3"}/>
                  <DropDownItem img = {bootstrap} text = {"Bootstrap5"}/>
                  <DropDownItem img = {js} text = {"Javascript"}/>
                  <DropDownItem img = {reactjs} text = {"React JS"}/>
                  <DropDownItem img = {github} text = {"GitHub"}/>
                  </div>
                  

                </div>
              </div>
              <div className="hobs-main-cont">
                <div className={hob ? "hobbies-det-cont invbl" : "hobbies-det-cont  disp"}>
                   <div className="hob-btn-cont">
                    <button className={hob ? "hobby-btn up" : "hobby-btn dwn"} onClick={handleHob}> 
                      <BsFiles style={{marginRight: "10px"}} />Hobbies
                    </button>
                   </div>
                   <div className={hob ? "hob-det-list ips" : "hob-det-list ops"}>
                  
                  <DropDownItem img = {vk} text = {"Playing Cricket"} />
                  <DropDownItem img = {linkin} text = {"Scrolling LinkedIn"}/>
                  <DropDownItem img = {instag} text = {"Scrolling Instagram"}/>
                  <DropDownItem img = {code} text = {"Coding"}/>
                  <DropDownItem img = {reactjs} text = {"Practising React JS"}/>
                  <DropDownItem img = {yoyo} text = {"Tech Videos"}/>
                  </div>
                   
                </div>
              </div>
            </div>
            <h3>
              <span>
                <TbBuildingFactory className="abt-icns" />
              </span>
              Previous Work Experience:
            </h3>
            <h4>
              PSG and Sons Metallurgy and Foundry Division <br></br>(2018-Present)
            </h4>
            <h5>Role:</h5>
            <h6>Junior New Product Development Engineer</h6>
            <h3>Work Description:</h3>
            <ul>
              <li>
                Involved in Pattern Design and Negotiated with vendors and
                Manufacturers on Pricing and Services
              </li>
              <li>Monitored Workspace to keep Safe and free of Debris.</li>
              <li>
                Converted Project Specifications into 2-Dimensional Drawings and
                other materials that would be used to create Product.
              </li>
              <li>
                Worked in High Pressure Moulding Lines and also in Hand Moulding
                with Furan Sand
              </li>
              <li>
                Developed around 400 plus parts in SINTO "(A Japan Based
                Flaskless Moulding Machine)" high pressure line in a span of 3
                Years.
              </li>
              <li>
                Minimized Cost Wastage by introducing Yeild Improvement Plans
                for the Organisation.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

function DropDownItem (props) {
  return(
    <li className="dropdownItem-lists">
      <img src={props.img}></img>
      <a>{props.text}</a>
    </li>
  );
}


export default AboutMe;


