import "./Profile.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

function Profile({ username }) {
  return (
    <>
      <Header />
      <div className="authorization">
        <div className="authorization__container profile__container">
          <h2 className="authorization__title profile__title">
            Привет, {username}!
          </h2>
          <form
            className="authorization__form"
            name="profile"
            method="POST"
            noValidate
          >
            <div className="profile__input-container">
              <p className="profile__input-name">Имя</p>
              <input
                className="authorization__input profile__input"
                id="name"
                name="name"
                type="text"
              ></input>
            </div>
            <div className="profile__input-container">
              <p className="profile__input-name">E-mail</p>
              <input
                className="authorization__input profile__input"
                id="email"
                name="email"
                type="email"
              ></input>
            </div>
            <button
              className="authorization__button profile__button"
              type="submit"
            >
              Редактировать
            </button>
          </form>
          <Link className="app__link profile__link" to="/signin">
            Выйти из аккаунта
          </Link>
        </div>
      </div>
    </>
  );
}

export default Profile;
