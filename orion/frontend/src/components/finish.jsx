import React from "react";
import { Link } from "react-router-dom";

import "./../css/confirmation.css";

function Finish(props) {
  return (
    <div className="gridForm">
      <div className="inscription">
        <p className="script">
          Ожидайте специалиста. До свидания. Хорошего дня.
        </p>
      </div>
      <div className="linkBack">
        <Link className="button" to="/confirmation">
          Назад
        </Link>
      </div>
      <p className="warning">
        Если вы нажмете на кнопу "в начало", данные по текущему запросу
        сохранятся на сервере, а вы перейдете в начальное меню.
      </p>
      <div className="linkNext">
        <Link className="button" to="/" onClick={props.resetFields}>
          В начало
        </Link>
      </div>
    </div>
  );
}

export default Finish;
