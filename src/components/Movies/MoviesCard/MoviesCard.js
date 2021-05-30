import "./MoviesCard.css";
import movieExample from "../../../images/example-movie.png";

function MoviesCard() {
  return (
    <>
      <article className="movie">
        <img className="movie__photo" src={movieExample} alt="кадр фильма" />
        <div className="movie__description">
          <h2 className="movie__title">33 слова о дизайне</h2>
          <button
            className="movie__like"
            type="button"
            aria-label="лайк"
          ></button>
        </div>
        <p className="movie__length">1ч42м</p>
      </article>

      <article className="movie">
        <img className="movie__photo" src={movieExample} alt="кадр фильма" />
        <div className="movie__description">
          <h2 className="movie__title">33 слова о дизайне</h2>
          <button
            className="movie__like movie__like_active"
            type="button"
            aria-label="лайк"
          ></button>
        </div>
        <p className="movie__length">1ч42м</p>
      </article>

      <article className="movie">
        <img className="movie__photo" src={movieExample} alt="кадр фильма" />
        <div className="movie__description">
          <h2 className="movie__title">33 слова о дизайне</h2>
          <button
            className="movie__like"
            type="button"
            aria-label="лайк"
          ></button>
        </div>
        <p className="movie__length">1ч42м</p>
      </article>

      <article className="movie">
        <img className="movie__photo" src={movieExample} alt="кадр фильма" />
        <div className="movie__description">
          <h2 className="movie__title">33 слова о дизайне</h2>
          <button
            className="movie__like"
            type="button"
            aria-label="лайк"
          ></button>
        </div>
        <p className="movie__length">1ч42м</p>
      </article>

      <article className="movie">
        <img className="movie__photo" src={movieExample} alt="кадр фильма" />
        <div className="movie__description">
          <h2 className="movie__title">33 слова о дизайне</h2>
          <button
            className="movie__like"
            type="button"
            aria-label="лайк"
          ></button>
        </div>
        <p className="movie__length">1ч42м</p>
      </article>
    </>
  );
}

export default MoviesCard;
