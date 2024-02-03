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
        <h1 className="about-heading font-head">
          <div data-aos="fade-up" data-aos-delay="0"  data-aos-once="true">Forbes <br/></div>
          <div data-aos="fade-up" data-aos-delay="200"  data-aos-once="true">Woman<br/></div> 
          <div data-aos="fade-up" data-aos-delay="400"  data-aos-once="true">Club</div>
        </h1>
        <div className="about-right font-link">
          <p className="about-subheading">Уникальная деловая площадка, где обсуждаются самые актуальные вопросы по развитию женского предпринимательства и лидерства в Казахстане.</p>
          <p className="about-subheading">В рамках Клуба регулярно проводятся различные мероприятия, направленные на расширение и реализацию деловых отношений между предпринимательницами...</p>
        </div>
      </div>
    </div>
  );  
};

export default About;
