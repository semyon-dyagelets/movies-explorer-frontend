import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className="footer__info">
          <p className="footer__copyright">Семён Дягелец © 2021</p>
          <nav className="footer__links">
            <ul className="footer__links-list">
              <li className="footer__item">
                <a
                  className="app__link footer__link"
                  href="https://praktikum.yandex.ru/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li className="footer__item">
                <a
                  className="app__link footer__link"
                  href="https://github.com/semyon-dyagelets"
                  rel="noreferrer"
                  target="_blank"
                >
                  Github
                </a>
              </li>
              <li className="footer__item">
                <a
                  className="app__link footer__link"
                  href="https://github.com/semyon-dyagelets"
                  rel="noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
