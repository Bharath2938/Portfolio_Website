
import React from "react";
import "./index.css"
import Home from "./Routes/Home";
import Project from "./Routes/Project";
import About from "./Routes/About";
import Resume from "./Routes/Resume";
import {Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App()  {

  return (
    <div>    
        <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/project" element={<Project />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/resume" element={<Resume />} />
      </Routes>        
    </div>
  );
}

export default App;
