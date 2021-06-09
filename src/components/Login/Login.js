import "./Login.css";
import React from "react";
import { Link } from "react-router-dom";
import useFormValidation from "../../utils/useFormValidation";
import ErrorInfoTool from "../ErrorInfoTool/ErrorInfoTool";
import headerLogo from "../../images/logo.svg";

function Login({ onLogin, isErrorShown }) {
  const { values, errors, isFormCorrect, handleChange, resetForm } =
    useFormValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin(values.email, values.password);
    resetForm();
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
        <h2 className="authorization__title">Рады видеть!</h2>
        <form
          className="authorization__form"
          name="register"
          method="POST"
          onSubmit={handleSubmit}
          noValidate
        >
          <label className="authorization__input-name">E-mail</label>
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
          <label className="authorization__input-name">Пароль</label>
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

          <ErrorInfoTool
          isShown={isErrorShown}
          />

          <button
            className="authorization__button"
            type="submit"
            disabled={!isFormCorrect}
          >
            Войти
          </button>
        </form>
        <div className="authorization__question">
          <p className="authorization__question-text">
            Ещё не зарегистрированы?
            <Link className="app__link authorization__link" to="/signup">
              {" "}
              Регистрация
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
