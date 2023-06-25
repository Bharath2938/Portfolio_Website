import React,{useState, useEffect} from "react";
import Navbar from "../Header/Navbar";
import Aboutme from "../Components/Aboutme";
import HeroImg3 from "../Components/HeroImages/HeroImg3";
import { Fragment } from "react";
import Loader from "../Components/Loader";
const About = () => {
  const [loading , setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() =>{
      setLoading(false);
    },1200);
  },[]);

 
  return (

     <Fragment>
       {
  loading ? <Loader /> : <>
   <Navbar />
   <HeroImg3 />
   <Aboutme />
  </>
 }
   
 </Fragment>   
  );
};

export default About;
