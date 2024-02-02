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
              <ul>
                <li>Условия вступления в клуб:</li>
                <li>- для вступления в клуб необходимо заполнить анкету</li>
                <li>- решение о вступлении в клуб принимается экспертным советом<br/></li>
                <li>- годовой членский взнос - 3 000 000 тенге</li>
                <li>- членство в клубе подтверждается наличием именной электронной клубной карты Forbes Woman Club</li>
              </ul>
              <form id="form">
                <div class="input__container">
                  {/* <label for="name">ФИО</label> */}
                  <input type="text" id="name" name="name" required placeholder="Ваше ФИО"/>
                </div>
                <div class="input__container">
                  <input type="email" id="email" name="email" required placeholder="Электронный адрес" />
                </div>
                <div class="input__container">
                  <input type="number" id="email" name="email" required placeholder="Телефон" />
                </div>
                <div class="input__container">
                  <label>Дата рождения</label>
                  <input type="date" id="email" name="email" required placeholder="Дата рождения" />
                </div>
                <div class="input__container">
                  <input type="text" id="email" name="email" required placeholder="Город проживания" />
                </div>
                <div class="input__container">
                  <input type="text" id="email" name="email" required placeholder="Сфера деятельности" />
                </div>
                <div class="input__container">
                  <input type="text" id="email" name="email" required placeholder="Должность" />
                </div>
                <div class="input__container">
                  <input type="text" id="email" name="email" required placeholder="Достижения" />
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