import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
import Card from "../Assets/card.jpg"
import Modal from "./Modal/Modal";
import Pdfile from '../Assets/priv.pdf'

const Testimonial = () => {
  return (
    <div id="priveleges" className="work-section-wrapper">
      <h1 className="privellege-heading">Привилегии членов <br/> Forbes Woman Club</h1>
      <div className="privellege-inner">
        <div className="privellege-left">
          <img src={Card} className="privellege-img"/>
        </div>
        <div className="privellege-right">
          <p>Доступ к уникальным предложениям от наших партнеров. Список расширяется, следите за обновлениями <span className="privellege-bold" href={Pdfile} target="blank">здесь</span> </p>
          <p className="privellege-paragraph">Участие в эксклюзивных ивентах Forbes Kazakhstan для участников клуба, где вы сможете не только насладиться культурным и развлекательным контентом, но также расширить свой профессиональный и личный круг общения</p>
          <p className="privellege-paragraph">Специальные возможности размещения рекламы на платформах Forbes Kazakhstan и индивидуальные партнерские условия для участия в мероприятиях</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
