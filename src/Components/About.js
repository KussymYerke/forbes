import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <div className="about-section-container">
        <h1 className="about-heading">
          <div data-aos="fade-up" data-aos-once="true">Forbes <br/></div>
          <div data-aos="fade-up" data-aos-once="true" data-aos-delay="300">Woman<br/></div> 
          <div data-aos="fade-up" data-aos-once="true" data-aos-delay="500">Club</div>
          </h1>
        <div className="about-right">
          <p className="about-subheading">Женское   комьюнити,    где   вы   получаете   поддержку    и    возможность    обменяться опытом и идеями как для карьеры, так и для личной жизни.</p>
          <p className="about-subheading">В   рамках   Клуба   регулярно проводятся различные мероприятия, направленные на развитие   не   только   профессиональных   навыков, но и личностного потенциала.</p>
        </div>
      </div>
    </div>
  );  
};

export default About;
