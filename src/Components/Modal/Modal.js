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
                <label>Ваше ФИО (полностью)</label>
                <input 
                  type="text"
                  required 
                />
                <label>Почта</label>
                <input 
                  type="email"
                  required 
                />
                <label>Номер телефона</label>
                <input 
                  type="number"
                  required 
                />
                <label>Дата рождения</label>
                <input type="date" />
                <label>Место проживания</label>
                <select>
                  <option value="Almaty">Алматы</option>
                  <option value="Astana">Астана</option>
                  <option value="Others">Другое</option>
                </select>
                <label>Сфера деятельности</label>
                <input type="text" />
                <label>Должность</label>
                <input type="text" />
                <label>Достижения</label>
                <input type="text" />
                <label>Никнейм в социальных сетях (свой/бизнеса)</label>
                <input type="text" />
                <label>Какие темы Вы считаете интересными для обсуждения на встречах Forbes Woman Club?</label>
                <input type="text" />
                <button>Отправить</button>
              </form>
            </div>
          </div>
        </div>  
      )}
      </>
  );
}