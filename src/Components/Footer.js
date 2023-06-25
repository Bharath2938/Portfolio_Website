import React from "react";
import "../stylesheets/FooterStyles.css";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaRegCopyright,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-container">
        <div className="footer-details">
          <div className="location">
            <FaHome
              size={20}
              style={{ color: "#FFCB74", marginLeft: "2rem" }}
            />
            <div>
              <p>53, Jeeva Street , Hopecollege</p>
              <p>Coimbatore - 641004</p>
              <p>TN , INDIA</p>
            </div>
          </div>
          <div className="mobile">
            <FaPhone
              size={20}
              style={{ color: "#FFCB74", marginLeft: "2rem" }}
            />

            <div>
              <p>+91 7708034627</p>
            </div>
          </div>
          <div className="mail">
            <FaMailBulk
              size={20}
              style={{ color: "#FFCB74", marginLeft: "2rem" }}
            />
            <div>
              <p>bharath9597120836@gmail.com </p>
            </div>
          </div>
        </div>
        <div className="footer-social">
          <h3>Ping Me !</h3>
          <h6>
            If you're looking for a Front End Developer, I'd love to hear from
            you ...
          </h6>
          <div className="social-links">
            <a
              href="https://www.facebook.com/karthick.siva.3382?mibextid=ZbWKwL"
              target="blank"
            >
              <FaFacebook className="facebook" />
            </a>
            <a
              href="https://instagram.com/king_and_his_grey_bull?igshid=ZDdkNTZiNTM="
              target="blank"
            >
              <FaInstagram className="instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/bharath-kumar-frontend-developer"
              target="blank"
            >
              <FaLinkedin className="linkedIn" />
            </a>
            <a href="https://github.com/Bharath2938" target="blank">
              <FaGithub className="github" />
            </a>
          </div>
          <div className="quote">
            <h6>In a World You can be Anything, Be Kind . . . </h6>
          </div>
        </div>
      </div>
      <div className="copy-cont">
      <div className="copyRight">
        <FaRegCopyright className="c-logo" />{" "}
        <p>Designed and Developed by - BK </p>
      </div>
      </div>
      
    </div>
  );
};

export default Footer;
