import React from "react";
import { useState, useEffect } from 'react';
import Navbar from "../Header/Navbar";
import ResumeImg from "../Components/HeroImages/ResumeImg";
import ResumePic from "../Components/ResumePic";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";

const Resume = () => {

  const [loading , setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() =>{
      setLoading(false);
    },1200);
  },[]);

  return (
    <div>
      {
        loading ? <Loader /> : <>
        <Navbar />
      <ResumeImg />
      <ResumePic />
      <Footer />
        </>
      }
      
    </div>
  );
};

export default Resume;
