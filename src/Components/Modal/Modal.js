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
              <form action="">
              <label class="custom-field">
                <input type="text" placeholder="&nbsp;"/>
                <span class="placeholder">ФИО</span>
                <span class="error-message" aria-live="polite">&nbsp;</span>
              </label>
              <label class="custom-field">
                <input type="text" placeholder="&nbsp;"/>
                <span class="placeholder">Ваша должность</span>
                <span class="error-message" aria-live="polite">&nbsp;</span>
              </label>
              <label class="custom-field">
                <input type="email" placeholder="&nbsp;"/>
                <span class="placeholder">Enter Email</span>
                <span class="error-message" aria-live="polite">&nbsp;</span>
              </label>
              <label class="custom-field">
                <input type="number" placeholder="&nbsp;"/>
                <span class="placeholder">Номерт телефона</span>
                <span class="error-message" aria-live="polite">&nbsp;</span>
              </label>

                <button>Отправить</button>
              </form>
            </div>
          </div>
        </div>  
      )}
      </>
  );
}