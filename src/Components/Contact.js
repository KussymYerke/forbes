import React from "react";
import Article1 from '../Assets/article-1.jpeg'
import Article2 from '../Assets/article-2.jpeg'
import Article3 from '../Assets/article-3.jpeg'

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <div className="articles">
          <div className="article">
              <a href="https://forbes.kz/woman/forbes_woman_club_priglasil_marian_zaltsman/">
                <img src={Article1} width={"100%"} height={"33%"} alt="article"/>
              </a>
              <div className="article-title">Forbes Woman Club 2021</div>
              <a className="article-button" href="https://forbes.kz/woman/forbes_woman_club_priglasil_marian_zaltsman/">Прочитать статью</a>
          </div>
        <div className="article">
            <a href="https://forbes.kz/woman/forbes_woman_club_2022_kak_nayti_sebya_v_biznese/">
              <img src={Article2} width={"100%"} height={"33%"} alt="article" />
              </a>
            <div className="article-title">Forbes Woman Club 2022</div>
            <a className="article-button" href="https://forbes.kz/woman/forbes_woman_club_2022_kak_nayti_sebya_v_biznese/">Прочитать статью</a>
        </div>
        <div className="article">
            <a href="https://forbes.kz/woman/tsifrovizatsiya_i_liderstvo_chto_obsujdali_na_forbes_woman_club_2023/">
             <img src={Article3} width={"100%"} height={"33%"} alt="article"/>
            </a>
            <div className="article-title">Forbes Woman Club 2023</div>
            <a className="article-button" href="#https://forbes.kz/woman/tsifrovizatsiya_i_liderstvo_chto_obsujdali_na_forbes_woman_club_2023/">Прочитать статью</a>
        </div>
      </div>
      <div className="wrapper">
        <div className="image">
          <img src={Article3} width={"100%"} height={"33%"} alt="article"/>
          <div className="content">
            <div className="article-info">
              <div className="content-title">Forbes Woman Club 2023</div>
              <a className="content-button" href="#https://forbes.kz/woman/tsifrovizatsiya_i_liderstvo_chto_obsujdali_na_forbes_woman_club_2023/">Прочитать статью</a>
            </div>
          </div>
        </div>
      </div>
      <div className="videos">
        <iframe className="video"  src="https://www.youtube.com/embed/UDZAllm970c?si=JOOtgt-yhSLMxFSq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className="video" src="https://www.youtube.com/embed/7-wY-nBUYZs?si=uvVPyqJIQWHaWrkr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default Contact;
