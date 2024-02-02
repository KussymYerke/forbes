import React from "react";
import Card from "../Assets/card.png"
import Modal from "./Modal/Modal";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Pdfile from './../Assets/priv.pdf'

const Testimonial = () => {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div id="priveleges" className="work-section-wrapper">
      <h1 className="privellege-heading font-head">Привилегии членов <br/> Forbes Woman Club</h1>
      <div className="privellege-inner">
        <div className="privellege-left">
          <img src={Card} className="privellege-img"/>
        </div>
        <div className="privellege-right font-link">
          <p data-aos="fade-up" data-aos-once="true">Доступ к уникальным предложениям от наших партнеров. Список партнеров дополняется, следите за обновлениями <a className="privellege-bold" href={Pdfile} target="blank">здесь</a> </p>
          <p data-aos="fade-up" data-aos-delay="200" data-aos-once="true" className="privellege-paragraph">Участие в эксклюзивных ивентах Forbes Kazakhstan для участников клуба, где вы сможете не только насладиться культурным и развлекательным контентом, но также расширить свой профессиональный круг общения</p>
          <p data-aos="fade-up" data-aos-delay="400" data-aos-once="true" className="privellege-paragraph">Специальные возможности размещения рекламы на платформах Forbes Kazakhstan и индивидуальные партнерские условия для участия в мероприятиях</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
