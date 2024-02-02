import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Events = () => {
  
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="member-wrapper">
        <h1 className="member-head font-head">Члены Forbes Woman <br/>Club</h1>
      <div className="member-list font-link">
        <div className="member" data-aos="fade-up" data-aos-once='true'>Участницы рейтингов Forbes Kazakhstan</div>
        <div className="member" data-aos="fade-up" data-aos-once='true'>Успешные предпринимательницы</div>
        <div className="member" data-aos="fade-up" data-aos-once='true'>Топ-менеджеры крупных компаний</div>
      </div>
    </div>
  );
};

export default Events;
