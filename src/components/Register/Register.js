import "./Register.css";
import { Link } from "react-router-dom";
import headerLogo from "../../images/logo.svg";

function Register() {
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
          method="POST"
          noValidate
        >
          <p className="authorization__input-name">Имя</p>
          <input
            className="authorization__input"
            id="name"
            name="name"
            type="text"
          ></input>
          <p className="authorization__input-name">E-mail</p>
          <input
            className="authorization__input"
            id="email"
            name="email"
            type="email"
          ></input>
          <p className="authorization__input-name">Пароль</p>
          <input
            className="authorization__input"
            id="password"
            type="password"
          ></input>
          <button className="app__button authorization__button" type="submit">
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
