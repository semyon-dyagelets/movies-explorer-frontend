import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="project">
      <div className="main__container">
        <h2 className="main__title project__title">О проекте</h2>
        <div className="project__conditions">
          <div className="project__condition">
            <h3 className="project__subtitle">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="project__description">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="project__condition">
            <h3 className="project__subtitle">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="project__description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="project__terms">
          <div>
            <div className="project__term project__term_whiteonblue">
              1 неделя
            </div>
            <span className="project__term-span">Back-end</span>
          </div>
          <div>
            <div className="project__term project__term_blackongrey">
              4 недели
            </div>
            <span className="project__term-span">Front-end</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
