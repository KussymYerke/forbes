import React from "react";
import Insta from './../Assets/instagram.png'
import Telega from './../Assets/telegram.png'
import WhatsApp from './../Assets/whatsapp.png'

const Footer = () => {
  return (
    <div id="team" className="footer">
      <div className="container">
      <div className="footer-upper">
        <ul className="footer-single">
          <li>Редакционный директор</li>
          <li>ForbesWoman </li>
          <li>Зульфия Хайбуллина</li>
          <li>zulfiya@forbes.kz</li>
        </ul>
        <ul className="footer-single">
          <li>Редакционный директор</li>
          <li>ForbesWoman </li>
          <li>Зульфия Хайбуллина</li>
          <li>zulfiya@forbes.kz</li>
        </ul>
      </div>
      <div className="footer-lower">
      <ul className="footer-single">
          <li>Редакционный директор</li>
          <li>ForbesWoman </li>
          <li>Зульфия Хайбуллина</li>
          <li>zulfiya@forbes.kz</li>
        </ul>
        <ul className="footer-single">
          <li>Редакционный директор</li>
          <li>ForbesWoman </li>
          <li>Зульфия Хайбуллина</li>
          <li>zulfiya@forbes.kz</li>
        </ul>
      </div>
      <div className="footer-lower-social">
        <img src={Insta} className="social" alt="" />
        <img src={Telega} className="social"  alt="" />
        <img src={WhatsApp} className="social"  alt="" />
      </div>
      </div>
    </div>
  );
};

export default Footer;
