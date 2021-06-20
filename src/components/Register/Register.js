import "./Register.css";
import React from "react";
import { Link } from "react-router-dom";
import useFormValidation from "../../utils/useFormValidation";
import ErrorInfoTool from "../ErrorInfoTool/ErrorInfoTool";
import headerLogo from "../../images/logo.svg";

function Register({ onRegister, isErrorShown }) {
  const { values, errors, isFormCorrect, handleChange } =
    useFormValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister(values.name, values.email, values.password);
  };

  return (
    <div className="authorization">
      <div className="authorization__container">
        <Link className="app__link header__link" to="/">
          <img
            className="header__logo"
            src={headerLogo}
            alt="Логотип проекта"
          />
        </Link>
        <h2 className="authorization__title">Добро пожаловать!</h2>
        <form
          className="authorization__form"
          name="register"
          onSubmit={handleSubmit}
          noValidate
        >
          <p className="authorization__input-name">Имя</p>
          <input
            className="authorization__input"
            id="name"
            name="name"
            type="text"
            value={values.name || ""}
            pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
            onChange={handleChange}
            required
          />
          <span id="name-error" className="authorization__input-error">
            {errors.name
              ? `Поле должно быть заполнено и содержать только буквы, пробел или дефис`
              : ""}{" "}
          </span>
          <p className="authorization__input-name">E-mail</p>
          <input
            className="authorization__input"
            id="email"
            name="email"
            type="email"
            value={values.email || ""}
            onChange={handleChange}
            required
          />
          <span id="email-error" className="authorization__input-error">
            {errors.email || ""}{" "}
          </span>
          <p className="authorization__input-name">Пароль</p>
          <input
            className="authorization__input"
            id="password"
            name="password"
            type="password"
            value={values.password || ""}
            onChange={handleChange}
            required
          />
          <span id="password-error" className="authorization__input-error">
            {errors.password || ""}{" "}
          </span>

          <ErrorInfoTool isShown={isErrorShown} />

          <button
            className="authorization__button"
            type="submit"
            disabled={!isFormCorrect}
          >
            Зарегистрироваться
          </button>
        </form>
        <div className="authorization__question">
          <p className="authorization__question-text">
            Уже зарегистрированы?
            <Link className="app__link authorization__link" to="/signin">
              {" "}
              Войти
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
