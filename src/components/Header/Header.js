import "./Header.css";
import headerLogo from "../../images/logo.svg";
import { Link, Route } from "react-router-dom";
import React from "react";

function Header({ loggedIn }) {
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = React.useState(false);
  const endpoints = ["/movies", "/saved-movies", "/profile", "/"];

  function handleBurgerClick() {
    setIsBurgerMenuOpened(!isBurgerMenuOpened);
  }

  return (
    <>
      <Route exact path={endpoints}>
        {loggedIn ? (
          <header className="header header_movies">
            <div className="header__container header__container_movies">
              <Link className="app__link" to="/">
                <img
                  className="header__logo"
                  src={headerLogo}
                  alt="Логотип проекта"
                />
              </Link>
              <nav>
                <Link className="app__link header__link-movie" to="/movies">
                  Фильмы
                </Link>
                <Link
                  className="app__link header__link-movie"
                  to="/saved-movies"
                >
                  Сохранённые фильмы
                </Link>
              </nav>
              <Link
                className="app__link header__link-movie header__link-profile"
                to="/profile"
              >
                Аккаунт
              </Link>

              <input
                className="header__button-burger"
                type="checkbox"
                onClick={handleBurgerClick}
                id="header__button-burger"
              />
              <label
                className="header__icon-burger"
                htmlFor="header__button-burger"
              >
                <span className="header__navicon-burger"></span>
              </label>

              <div
                className={`header__burger-menu ${
                  isBurgerMenuOpened ? 
                  "header__burger-menu_opened" 
                  : 
                  ""
                }`}
              >
                <nav className="header__burger-links">
                  <Link className="app__link header__burger-link" to="/">
                    Главная
                  </Link>
                  <Link className="app__link header__burger-link" to="/movies">
                    Фильмы
                  </Link>
                  <Link
                    className="app__link header__burger-link"
                    to="/saved-movies"
                  >
                    Сохранённые фильмы
                  </Link>
                </nav>

                <Link
                  className="app__link header__link-profile header__link-profile_burger"
                  to="/profile"
                >
                  Аккаунт
                </Link>
              </div>
            </div>
          </header>
        ) : (
          <header className="header header_main">
            <div className="header__container header__container_main">
              <Link className="app__link header__link" to="/">
                <img
                  className="header__logo"
                  src={headerLogo}
                  alt="Логотип проекта"
                />
              </Link>
              <nav className="header__links">
                <Link
                  className="app__link header__link header__signup-link"
                  to="/signup"
                >
                  Регистрация
                </Link>
                <Link
                  to="/signin"
                  className="app__link header__link header__login-link"
                >
                  Войти
                </Link>
              </nav>
            </div>
          </header>
        )}
      </Route>
    </>
  );
}

export default Header;
