import React, { useState } from 'react';
import "../stylesheets/NavbarStyles.css";
import {NavLink} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";
import portLogo from "../Assets/Portlogo1.png";

const Navbar = () => {

const [click,setClick] = useState(false);
const handleClick = () => setClick(!click);

const [color,setColor] = useState(false);
const changeColor = () => {
    if(window.scrollY >=100) {
        setColor(true);
    }else {
        setColor(false);
    }
};
 window.addEventListener("scroll", changeColor);

  return (
    <nav className={color ? "nav-header nav-header-bg" : "nav-header"}>
        <h1><span><img className="port-img" src={portLogo} alt="Logo" /></span></h1>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <NavLink to="/" >Home</NavLink>
            </li>
            <li>
                <NavLink to="/project"  >Projects</NavLink>
            </li>
            <li>
                <NavLink to="/about" >About</NavLink>
            </li>
            <li>
                <NavLink to="/resume"  >Resume</NavLink>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes  className='ham-logo'/>) : 
            (<FaBars className='ham-logo' />)}
        </div>
    </nav>
  )
}

export default Navbar