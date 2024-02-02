import React from "react";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Catalogue1 from './../Assets/9dea36e79965ae96676088f6bf8e8e7d-small.jpg'
import Catalogue2 from './../Assets/ef68be70ea06f35f87212adb4bcc71b2-small.jpg'
import Catalogue3 from './../Assets/ef68be70ea06f35f87212adb4bcc71b2-small.jpg'
import Catalogue4 from './../Assets/ef68be70ea06f35f87212adb4bcc71b2-small.jpg'
import Catalogue5 from './../Assets/ef68be70ea06f35f87212adb4bcc71b2-small.jpg'
import Journal1 from './../Assets/cover1.jpeg'
import Journal2 from './../Assets/cover2.jpeg'

const Home = () => {

  const catalogue = [
    {
      img: Catalogue1,
    },
    {
      img: Catalogue2,
    },
    {
      img: Catalogue3,
    },
    {
      img: Catalogue4,
    },
    {
      img: Catalogue5,
    },
  ]

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autpoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <div className="home-container font-head">
      <Navbar />
      <div id="hero" className="home-banner-container">
        <div className="left">
          <div className="carousel">
            <Slider {...settings} className="slider">
              {catalogue.map((c) => (
                  <img className="box" src={c.img} />
              ))}
            </Slider>
          </div>
        </div>
        <div>
            <div className="right">
              <img className="journal" src={Journal1}/>
              <img className="journal" src={Journal2}/>
              </div>
            <h3 className="right-heading">Архив журналов</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
