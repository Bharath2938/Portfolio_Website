import React from "react";
import Navbar from "../Header/Navbar";
import HeroImg from "../Components/HeroImages/HeroImg";
import Footer from "../Components/Footer";
import { useState,useEffect } from "react";
import Loader from "../Components/Loader";
const Home = () => {

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
    <HeroImg />
    <Footer />
        </>
      }
    
    </div>
  )
}

export default Home