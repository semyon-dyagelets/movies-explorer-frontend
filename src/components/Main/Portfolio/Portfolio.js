import "./Portfolio.css";
import imageLink from "../../../images/link-image.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="main__container portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            Статичный сайт
            <a
              className="app__link portfolio__link"
              href="https://semyon-dyagelets.github.io/how-to-learn/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="portfolio__link-image"
                src={imageLink}
                alt="ссылка"
              />
            </a>
          </li>
          <li className="portfolio__item">
            Адаптивный сайт
            <a
              className="app__link portfolio__link"
              href="https://semyon-dyagelets.github.io/russian-travel/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="portfolio__link-image"
                src={imageLink}
                alt="ссылка"
              />
            </a>
          </li>
          <li className="portfolio__item">
            Одностраничное приложение
            <a
              className="app__link portfolio__link"
              href="https://semyon-dyagelets.nomoredomains.club/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="portfolio__link-image"
                src={imageLink}
                alt="ссылка"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
