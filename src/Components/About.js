import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div>
      <div className="about-section-container">
        <div className="about-heading">Forbes Woman Club</div>
        <div className="about-right">
          <p className="about-subheading">Коммьюнити для поддержки и вдохновения женщин в карьере и личной жизни. Здесь представительницы разных сфер обмениваются опытом и идеями.</p>
          <p className="about-subheading">Наша цель — создать уникальное пространство для общения, вдохновения и профессионального роста. Мы организуем разнообразные мероприятия и предоставляем контент для улучшения качества жизни и карьерных возможностей  членов нашего клуба.</p>
        </div>
      </div>
    </div>
  );  
};

export default About;
