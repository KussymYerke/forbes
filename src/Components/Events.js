import React from "react";
import Modal from "./Modal/Modal";

const Events = () => {
  return (
    <div id="events" className="event-wrapper">
      <h1 className="event-heading font-head">Календарь мероприятий</h1>
      <div className="events font-link">
        <div className="event" data-aos="fade-up" data-aos-once="true">
            <div className="event-title">Forbes Woman Brunches</div>
            <div className="event-details">
                <div className="event-month">Апрель</div>
                <div className="event-place">г.Астана, г.Алматы</div>
            </div>
        </div>
        <div className="event" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
            <div className="event-title">Forbes Woman Club</div>
            <div className="event-details">
                <div className="event-month">Сентябрь</div>
                <div className="event-place">г.Алматы</div>
            </div>
        </div>
        <div className="event" data-aos="fade-up" data-aos-delay="400" data-aos-once="true">
            <div className="event-title">Forbes Woman Brunches</div>
            <div className="event-details">
                <div className="event-month">Июнь</div>
                <div className="event-place">г.Алматы, г.Астана</div>
            </div>
        </div>
        <div className="event" data-aos="fade-up" data-aos-delay="600" data-aos-once="true">
            <div className="event-title">Forbes Woman Brunches</div>
            <div className="event-details">
                <div className="event-month">Декабрь</div>
                <div className="event-place">г.Астана, г.Алматы</div>
            </div>
        </div> 
        <div id="form" className="event-club font-link">
            <Modal/>
        </div>
      </div>
    </div>
  );
};

export default Events;
