import React from "react";
import Gallery1 from "../Assets/gallery-1.png";
import Gallery2 from "../Assets/gallery-2.png";
import Gallery3 from "../Assets/gallery03.png";
import Gallery4 from "../Assets/gallery-4.png"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Work = () => {
  
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    
    <div className="work-section-wrapper font-link">
      <div className="gallery-upper">
          <img src={Gallery1} alt="gallery-first" width={"30%"}/>
        <div className="gallery-right"> 
        <div className="scroll">
          <div className="RightToLeft" data-aos="fade-left" data-aos-once="true">
            <p>Бизнес–лидерство;</p>
          </div>
          <div className="RightToLeft" data-aos="fade-left" data-aos-delay="100" data-aos-once="true">
            <p>Медийное <span className="p-margin"  >влияние;</span></p>
          </div>
          <div className="RightToLeft" data-aos="fade-left" data-aos-delay="200" data-aos-once="true">
            <p>Предпринимательский</p>
          </div>
          <div className="RightToLeft" data-aos="fade-left" data-aos-delay="300" data-aos-once="true">
            <p>дух; <span className="p-margin">Общественная</span></p>
          </div>
          <div className="RightToLeft" data-aos="fade-left" data-aos-delay="400" data-aos-once="true">
            <p>активность;</p>
          </div>
          <div className="RightToLeft" data-aos="fade-left" data-aos-delay="500" data-aos-once="true">
            <p>Искусство и культура</p>
          </div>
        </div>
        </div>
      </div>
      <div className="gallery-lower">
        <img src={Gallery2} width={'45%'} className="gallery-img"/>
        <img src={Gallery3} width={'22.25%'} className="gallery-img"/>
        <img src={Gallery4} width={'22.25%'}/>
      </div>
    </div>
  );
};

export default Work;
