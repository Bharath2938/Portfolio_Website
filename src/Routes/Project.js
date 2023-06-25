import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../Header/Navbar';
import HeroImg2 from '../Components/HeroImages/HeroImg2';
import ProjectCarousel from '../Components/ProjectCarousel';
import Portfolio from '../Components/Portfolio';
import Loader from '../Components/Loader';

const Project = () => {
  const [loading , setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() =>{
      setLoading(false);
    },1200);
  },[]);

  return (
    <div>
       {loading ? (<Loader />) : (<>
        <Navbar />
      <HeroImg2 />
      <ProjectCarousel />
      <Portfolio />
       </>
      
       )
}
    </div>
  )
}

export default Project