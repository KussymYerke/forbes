import React, { useState } from "react";
import "./Modal.css";
import Logo1 from './../../Assets/лого парюр 1.png'
import Logo2 from './../../Assets/LOGO_QUEEN_ALMATY_Y_Монтажная_область_1_Монтажная_область_1 1.png'
import Logo3 from './../../Assets/LOFT_logo 1.png'
import Logo4 from './../../Assets/технофит 1.png'
import Logo5 from './../../Assets/TFO_logo-2 1.png'
import Logo6 from './../../Assets/nuchi (002) 1.png'
import Logo7 from './../../Assets/winox pro - fitness club - logo 1.png'
import Logo8 from './../../Assets/Изображение WhatsApp 2023-12-27 в 13.31 1.png'
import Logo9 from './../../Assets/лого asiathaispa 1.png'
import Logo10 from './../../Assets/лого The Human 1.png'
import Logo11 from './../../Assets/2 (002) 1.png'
import Logo12 from './../../Assets/Logo Yellow NEW 1.png'
import Logo13 from './../../Assets/J-tour_logo_1920 1.png'
import Logo14 from './../../Assets/лого_invictusfitness 1.png'
import Logo15 from './../../Assets/лого TCG 1.png'
import Logo16 from './../../Assets/jade logo 24 1.png'
import Logo17 from './../../Assets/sheratonTSESI_ko 1.png'
import Logo18 from './../../Assets/strTSEXRpms-B-201926-Centered Property Logo Lockup ASTOR GRAY SPOT COLOR version Click thumbnail-PNG (1) (002) 1.png';


export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const companies = [
    {
      img: Logo1,
      width: "287px",
      height: '223px',
      title: 'Parure Atelier',
      link: 'https://www.instagram.com/parure_kz/',
      description: 'Скидка  7% на все ювелирные изделия',
      pb: '52px'
    },
    {
      img: Logo2,
      width: "288px",
      height: '287px',
      title: 'Queen',
      link: 'https://queenalmaty.kz/',
      description: 'Скидка  20% на кухню',
      pb:'0px'
    },
    {
      img: Logo3,
      width: "320px",
      height: '150.83px',
      title: 'Loft Beauty Concept',
      description: 'Скидка  20% на все услуги',
      pb: '80px'
    },
    {
      img: Logo4,
      width: "287px",
      height: '53px',
      title: 'TechnoFit',
      description: 'Скидка  до 20% *в зависимости от вида абонемента',
      pb: '85.84px'
    },
    {
      img: Logo5,
      width: "350px",
      height: '93px',
      title: 'The Face only',
      description: 'Скидка  10% на все процедуры',
      pb: '45.85px'
    },
    {
      img: Logo6,
      width: "320px",
      height: '138.85px',
      title: 'Nuchi',
      description: 'Скидка  10% на все услуги',
      pb: '20px'
    },
    {
      img: Logo7,
      width: "287px",
      height: '92px',
      title: 'WinoxPro',
      description: 'Скидка 10% на все виды абонементов',
      pb:'53px'
    },
    {
      img: Logo8,
      title: 'Gold Berry',
      width: "350px",
      height: '86px',
      description: 'Скидка  15% на все ювелирные изделия',
      pb: '59px'
    },
    {
      img: Logo9,
      width: "320px",
      height: '145px',
      title: 'AsiaThaiSpa Daily',
      description: 'Скидка  10% на все услуги',
      pb:'30px'
    },
    {
        img: Logo10,
        width: "287px",
        height: '96.5px',
        title: 'The Human Medical Spa',
        description: 'Скидка  20% на все услуги',
        pb: '24.65px'
      },
      {
        img: Logo11,
        width: "350px",
        height: '121.15px',
        title: 'Siluetica',
        description: 'Скидка  10% на все услуги',
        pb: '10px'
      },
      {
        img: Logo12,
        width: "320px",
        height: '114.5px',
        title: 'Yellow',
        description: 'Скидка  15% на все услуги',
        pb: '12px'
      },
      {
        img: Logo13,
        width: "287px",
        height: '123px',
        title: 'J-TOUR',
        description: 'Скидка от 2-5% на международные туры',
        pb: '20px'
      },
      {
        img: Logo14,
        width: "350px",
        height: '122px',
        title: 'Invictus Fitness',
        description: 'Invictus Samal/Gagarin -  скидка 10%  Invictus Sadu - скидка 5%',
        pb: '30px'
      },
      {
        img: Logo15,
        width: "320px",
        height: '96.5px',
        title: 'The Chief Group',
        description: 'Скидка 10% на всю сеть ресторанов',
        pb: '26.5px'
      },
      {
        img: Logo16,
        width: "287px",
        height: '123px',
        title: 'Jade',
        description: 'Скидка  15% на все ювелирные изделия',
        pb:'0px'
      },
  ]

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (

    <>
      <span onClick={toggleModal} className="btn-modal">
        списком
      </span>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
             <div className="close-modal" onClick={toggleModal}>
              X
            </div>
            {companies.map((c) => (
                <div className="company-content">
                    <img  src={c.img} width={c.width} height={c.height}/>
                    <div className="company-text" style={{top: c.pb}}>
                        <h1 className="company-title" >{c.title}</h1>
                        <p className="company-description">{c.description}</p>
                    </div>
                </div>
            ))}
            <div className="modal-lower">
                <div>
                    <img src={Logo17} width={'481px'}/>
                    <h1 className="company-title">Sheraton Astana Hotel</h1>
                    <ul className="comp-description">
                        <li>Скидка 10% на проживание в отеле Sheraton Astana от открытой цены на необходимую дату (не включая минибар или заказы в номер)</li>
                        <li>Скидка 10% в ресторане Emiliya в отеле Sheraton Astana</li>
                        <li>Скидка 10% в ресторане SALTER’S в отеле Sheraton Astana</li>
                        <li>Скидка 10% на массажи и программы по уходу за лицом и телом в Sheraton Spa&Fitness</li>
                        <li>Скидка 10% на абонементы в Sheraton Spa&Fitness на 1 человека или на пару</li>
                        <li>Комплимент в номере</li>
                    </ul>
                </div>
                <div className="company-content">
                    <img src={Logo18}/>
                    <div className="company-text">
                    <h1 className="company-title">St Regis Astana</h1>
                    <p className="company-description">Скидка 10% на всю сеть ресторанов</p>
                    </div>
                </div>
            </div>
          </div>
        </div>  
      )}
      </>
  );
}