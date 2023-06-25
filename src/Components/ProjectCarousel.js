import { useState } from 'react';
import "../stylesheets/ProjectCarouselStyles.css";
import {Carousel} from 'react-bootstrap';
import ProImg1 from "../Assets/ProImg1.jpeg";
import ProImg2 from "../Assets/ProImg2.jpeg";
import ProImg3 from "../Assets/ProImg3.jpeg";
import ProImg4 from "../Assets/ProImg4.jpeg";
import ProImg5 from "../Assets/ProImg5.jpeg";
import {FaGithub} from "react-icons/fa";

function ControlledCarousel() {
  const [indexes, setIndexes] = useState(0);

  const handleSelects = (selectedIndex) => {
    setIndexes(selectedIndex);
  };
  
  return (
    <div className='pro-caro'>
      <div className='main-head'>
        <h1>Photography Demo Website</h1>
      </div>
    <Carousel activeIndex={indexes} onSelect={handleSelects}>
      <Carousel.Item>
        <img
          className="caro-img"
          src={ProImg1}
          alt="First slide"
        />
        <div className='carousel-capt'>
          <h3>Photography Demo Website</h3>
          <ul>
            <li>This is one of my Project as a Beginner.</li>
            <li>This Photography Demo Website is created using
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap5</li>
                <li>MediaQueries</li>
              </ul>
            </li>
            <li>This is the Main page where you can find the simple description about the Shop.</li>
          </ul>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="caro-img"
          src={ProImg2}
          alt="Second slide"
        />

        <div className='carousel-capt'>
          <h3>Photography Demo Website</h3>
          <ul>
          <li>This is a Mobile Responsive Demo Website.</li>
            <li>This Section shows about the details of the store.</li>
            <li>These Cards were used to showcase their previous projects.</li>
            
          </ul>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="caro-img"
          src={ProImg3}
          alt="Third slide"
        />

        <div className='carousel-capt'>
        <h3>Photography Demo Website</h3>
          <ul>
          <li>This  section is a type of Marketing Section.</li>
            <li>This is an E-Commerce section for the website.</li>
          </ul>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="caro-img"
          src={ProImg4}
          alt="Third slide"
        />

        <div className='carousel-capt'>
        <h3>Photography Demo Website</h3>
          <ul>
          <li>This  section is a type of Enquiry Section.</li>
            <li>Forms and Ionicon Icons has been used to build this form setion.</li>
          </ul>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="caro-img"
          src={ProImg5}
          alt="Third slide"
        />

        <div className='carousel-capt'>
        <h3>Photography Demo Website</h3>
          <ul>
          <li>This  section is a Location Section.</li>
            <li>Google Maps has been embeded in this section</li>
            <li>Otherthan these Sections , there were youtube video player, social media buttons were also provided.</li>
          </ul>
        </div>
      </Carousel.Item>
    </Carousel>
   <div className='link-git'>
    <h3><a href="https://github.com/Bharath2938" target="blank"><FaGithub className="githubs" />
    </a>Click on the Logo to know more ...</h3>
   </div>
    </div>
  );
}

export default ControlledCarousel;