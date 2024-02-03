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

  function Submit(e) {
    const formEle = document.querySelector("form");
    e.preventDefault();
    const formData = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbzKxWCX2Dh-dWgpOx7F8N0zrSPFI01qKoqlyh54WlcUbrsKcT1pKvSHb7AJs-2k3OyG/exec",
      {
        method: "POST",
        body: formData
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
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
                <li className="create-bold">Условия вступления в клуб:</li>
                <li>- для вступления в клуб необходимо заполнить анкету</li>
                <li>- решение о вступлении в клуб принимается экспертным советом<br/></li>
                <li>- годовой членский взнос - 3 000 000 тенге</li>
                <li>- членство в клубе подтверждается наличием именной электронной клубной карты Forbes Woman Club</li>
              </ul>
              <form id="form" onSubmit={(e) => Submit(e)}>
                <div class="input__container">
                  {/* <label for="name">ФИО</label> */}
                  <input type="text" id="Name" name="Name" required placeholder="Ваше ФИО"/>
                </div>
                <div class="input__container">
                  <input type="email" id="Email" name="Email"  placeholder="Электронный адрес" />
                </div>
                <div class="input__container">
                  <input type="number" id="Phone" name="Phone"  placeholder="Телефон" />
                </div>
                <div class="input__container">
                  <label>Дата рождения</label>
                  <input type="date" id="Date" name="Date"  placeholder="Дата рождения" />
                </div>
                <div class="input__container">
                  <input type="text" id="City" name="City"  placeholder="Город проживания" />
                </div>
                <div class="input__container">
                  <input type="text" id="Position" name="Position"  placeholder="Сфера деятельности" />
                </div>
                <div class="input__container">
                  <input type="text" id="Job" name="Job"  placeholder="Должность" />
                </div>
                <div class="input__container">
                  <input type="text" id="Achievement" name="Achievement"  placeholder="Достижения" />
                </div>
                <div class="input__container">
                  <input type="text" id="Nickname" name="Nickname"  placeholder="Никнейм в социальных сетях (свой/бизнеса)" />
                </div> 
                <div class="input__container">
                  <textarea id="Comments" name="Comments" rows="4"  placeholder="Какие темы Вы считаете интересными для обсуждения на встречах Forbes Woman Club?"></textarea>
                </div>
                <button name="Submit" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>  
      )}
      </>
  );
}