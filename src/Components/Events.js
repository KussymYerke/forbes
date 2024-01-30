import React from "react";

const Events = () => {
  return (
    <div id="events" className="event-wrapper">
      <h1 className="event-heading">Календарь мероприятий</h1>
      <div className="events">
        <div className="event">
            <div className="event-title">Бизнес-бранчи</div>
            <div className="event-details">
                <div className="event-month">Апрель</div>
                <div className="event-place">г.Астана, г.Алматы</div>
            </div>
        </div>
        <div className="event">
            <div className="event-title">Forbes Woman Club </div>
            <div className="event-details">
                <div className="event-month">Сентябрь</div>
                <div className="event-place">г.Алматы</div>
            </div>
        </div>
        <div className="event">
            <div className="event-title">Бизнес-бранчи</div>
            <div className="event-details">
                <div className="event-month">Июль</div>
                <div className="event-place">г.Алматы, г.Астана</div>
            </div>
        </div>
        <div className="event">
            <div className="event-title">Бизнес-бранчи</div>
            <div className="event-details">
                <div className="event-month">Декабрь</div>
                <div className="event-place">г.Астана, г.Алматы</div>
            </div>
        </div> 
        <div id="form" className="event-club">
            <a href="https://docs.google.com/forms/d/1ruhnx0iYyehpuA9keySeQDYCLXp7Z741bVJ_OFR21Ek/edit" className="event-button">Вступить в клуб</a>
        </div>
      </div>
    </div>
  );
};

export default Events;
