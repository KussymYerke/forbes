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
                  <input type="email" id="email" name="email" required placeholder="Название компании" />
                </div>
                <div class="input__container">
                  <input type="email" id="email" name="email" required placeholder="Сфера деятельности (чем занимается компания)" />
                </div>
                <div class="input__container">
                  <input type="email" id="email" name="email" required placeholder="Должность" />
                </div>
                <div class="input__container">
                  <input type="email" id="email" name="email" required placeholder="Телефон" />
                </div>
                <div class="input__container">
                  <input type="email" id="email" name="email" required placeholder="Email" />
                </div>
                <div class="input__container">
                  <textarea id="message" name="message" rows="4" required placeholder="Комментарий"></textarea>
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