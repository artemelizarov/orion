import React from "react";
import { Link } from "react-router-dom";

import "./../css/confirmation.css";

function Confirmation(props) {
  return (
    <div className="confirmation">
      <div className="inscription">
        <p className="script">Информация по заявке.</p>
      </div>
      <p className="heading">Город</p>
      <p className="info">{props.city}</p>
      <p className="heading">ФИО</p>
      <p className="info">
        {props.surname} {props.name} {props.patronymic}
      </p>
      <p className="heading">Адрес</p>
      <p className="info">
        ул. {props.street} д. {props.numberHouse} кв. {props.numberApartament}
      </p>
      <p className="heading">Причина обращения</p>
      <p className="info">{props.problem}</p>
      <p className="heading">Комментарий</p>
      <p className="info">{props.comment}</p>
      <p className="heading">Номерт телефона</p>
      <p className="info">{props.phoneNumber}</p>
      <p className="heading">Тариф</p>
      <p className="info">{props.rates}</p>
      <div className="linkBack linkUpdate">
        <Link className="button" to="/offers">
          Назад
        </Link>
      </div>
      <div className="linkNext linkUpdate">
        <Link className="button" to="/finish" onClick={props.sentData}>
          Отправить
        </Link>
      </div>
      <div className="closes closesUpdate">
        <Link className="button" to="/close-application">
          Закрыть заявку
        </Link>
      </div>
    </div>
  );
}

export default Confirmation;
