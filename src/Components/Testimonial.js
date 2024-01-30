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
          <p>Уникальные бонусы  от тщательно <br/> подобранных партнеров, которые недоступны <br/> широкой общественности. Ознакомьтесь со <br/> <span className="privellege-bold"><Modal /> (модалка)</span> </p>
          <a href={Pdfile} target="blank">Списком (pdf-file)</a>
          <p className="privellege-paragraph">Мы организуем эксклюзивные ивенты для участников клуба, где вы сможете не только насладиться культурным и развлекательным контентом, но также расширить свой профессиональный и личный круг общения</p>
          <p className="privellege-paragraph">Мы предлагаем специальные возможности размещения рекламы на платформах Forbes Kazakhstan, и партнерские условия в рамках участия в наших мероприятиях</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
