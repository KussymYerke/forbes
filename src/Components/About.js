import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div>
      <div className="about-section-container">
        <h1 className="about-heading">Forbes Woman Club</h1>
        <div className="about-right">
          <p className="about-subheading">Женское   комьюнити,    где   вы   получаете   поддержку    и    возможность    обменяться опытом и идеями как для карьеры, так и для личной жизни.</p>
          <p className="about-subheading">В   рамках   Клуба   регулярно проводятся различные мероприятия, направленные на развитие   не   только   профессиональных   навыков, но и личностного потенциала.</p>
        </div>
      </div>
    </div>
  );  
};

export default About;
