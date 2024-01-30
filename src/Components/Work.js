import React from "react";
import Gallery1 from "../Assets/gallery-1.png";
import Gallery2 from "../Assets/gallery-2.png";
import Gallery3 from "../Assets/gallery03.png";
import Gallery4 from "../Assets/gallery-4.png"

const Work = () => {
  
  return (
    <div className="work-section-wrapper">
      <div className="gallery-upper">
          <img src={Gallery1} alt="gallery-first" width={"30%"}/>
        <div className="gallery-right"> 
        <div className="scroll">
          <div className="RightToLeft">
            <p>Бизнес–лидерство;</p>
          </div>
          <div className="RightToLeft">
            <p>Медийное <span className="p-margin">влияние;</span></p>
          </div>
          <div className="RightToLeft">
            <p>Предпринимательский</p>
          </div>
          <div className="RightToLeft">
            <p>дух; <span className="p-margin">Общественная</span></p>
          </div>
          <div className="RightToLeft">
            <p>активность;</p>
          </div>
          <div className="RightToLeft">
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
