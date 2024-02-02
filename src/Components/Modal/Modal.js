import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (

    <>
      <span onClick={toggleModal} className="event-button">
        Вступить в клуб
      </span>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
             <div className="close-modal" onClick={toggleModal}>
              X
            </div>
            <div className="create">
              <h1 className="create-heading">ОТПРАВИТЬ ЗАЯВКУ</h1>
              <form id="form">
                <div class="input__container">
                  {/* <label for="name">ФИО</label> */}
                  <input type="text" id="name" name="name" required placeholder="ФИО"/>
                </div>
                <div class="input__container">
                  <input type="email" id="email" name="email" required placeholder="Email" />
                </div>
                <div class="input__container">
                  <input type="number" id="email" name="email" required placeholder="Номер телефона" />
                </div>
                <div class="input__container">
                  <label>Дата рождения</label>
                  <input type="date" id="email" name="email" required placeholder="Дата рождения" />
                </div>
                <div class="input__container">
                  <input type="text" id="email" name="email" required placeholder="Местро проживания (Город)" />
                </div>
                <div class="input__container">
                  <input type="text" id="email" name="email" required placeholder="Сфера деятельности" />
                </div>
                <div class="input__container">
                  <input type="text" id="email" name="email" required placeholder="Должность" />
                </div>
                <div class="input__container">
                  <input type="text" id="email" name="email" required placeholder="Никнейм в социальных сетях (свой/бизнеса)" />
                </div> 
                <div class="input__container">
                  <textarea id="message" name="message" rows="4" required placeholder="Какие темы Вы считаете интересными для обсуждения на встречах Forbes Woman Club?"></textarea>
                </div>
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>  
      )}
      </>
  );
}