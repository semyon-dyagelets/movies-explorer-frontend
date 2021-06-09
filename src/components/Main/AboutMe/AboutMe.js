import "./AboutMe.css";
import profilePhoto from "../../../images/profile-photo.jpg";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <section className="about-me">
      <div className="main__container about-me__container">
        <h2 className="main__title">Студент</h2>
        <div className="about-me__profile">
          <div className="about-me__data">
            <div>
              <h3 className="about-me__name">Семён</h3>
              <h4 className="about-me__profession">
                Фронтенд-разработчик, 33 года
              </h4>
              <p className="about-me__story">
                Я родился и живу в Перми. Закончил историко-политологический
                факультет ПГУ и успел поработать в СМИ, сфере образования и
                туризме. С 2019 года работаю в административном департаменте
                компании «Xsolla». Работая в IT-компании и координируя обучение
                коллег, я заинтересовался фронтенд-разработкой. Так я оказался в
                Яндекс.Практикуме, где в мае 2021 закончил 9-месячный курс
                "Веб-разработчик".
              </p>
            </div>
            <ul className="about-me__contacts">
              <a
                className="app__link about-me__link"
                href="https://www.linkedin.com/in/semyon-dyagelets-40aa3185/"
                rel="noreferrer"
                target="_blank"
              >
                <li className="app__link about-me__link">LinkedIn</li>
              </a>
              <a
                className="app__link about-me__link"
                href="https://github.com/semyon-dyagelets"
                rel="noreferrer"
                target="_blank"
              >
                <li className="about-me__link">Github</li>
              </a>
            </ul>
          </div>
          <img
            className="about-me__photo"
            src={profilePhoto}
            alt="фото-студента"
          />{" "}
        </div>
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
