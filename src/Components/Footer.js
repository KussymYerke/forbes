import React from "react";
import Insta from './../Assets/instagram.png'
import Telega from './../Assets/telegram.png'
import WhatsApp from './../Assets/whatsapp.png'

const Footer = () => {
  return (
    <div id="team" className="footer font-link">
      <div className="container">
      <div className="footer-upper">
        <ul className="footer-single">
          <li>Редакционный директор</li>
          <li>ForbesWoman </li>
          <li>Зульфия Хайбуллина</li>
          <li>zulfiya@forbes.kz</li>
        </ul>
        <ul className="footer-single">
          <li>Маркетинг</li>
          <li>София Ким </li>
          <li>marketing@forbes.kz</li>
          <li>+7 775 477 82 27</li>
        </ul>
      </div>
      <div className="footer-lower">
        <div className="footer-lower-group">
          <ul className="footer-lower-single">
            <li>Руководитель отдела подписки и <br/>распространения журналов</li>
            <li>Светлана Прошина </li>
            <li>sub@forbesmagazine.kz </li>
            <li>+7 747 318 28 05</li>
          </ul>
          <ul className="footer-lower-single">
            <li>Руководитель отдела продаж </li>
            <li>Юлдуз Саттарова </li>
            <li>adv@forbes.kz</li>
            <li>+7 707 823 60 40</li>
          </ul>
        </div>
        <div className="footer-lower-social">
        <a href="https://www.instagram.com/forbes_kz/"><img src={Insta} className="social" alt="insta" /></a>
        <a href="https://t.me/+77754778227"><img src={Telega} className="social"  alt="" /></a>
        <a href="https://wa.me/77754778227"><img src={WhatsApp} className="social"  alt="" /></a>
      </div>
      </div>
      
      </div>
    </div>
  );
};

export default Footer;
