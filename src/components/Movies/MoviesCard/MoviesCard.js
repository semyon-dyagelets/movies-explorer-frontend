import "./MoviesCard.css";
import { convertDurationToHHMM } from "../../../utils/utils";

function MoviesCard({ card, onLikeMovie, onDeleteMovie, liked, savedPage }) {
  function handleLikeClick() {
    onLikeMovie(card);
  }

  function handleDeleteClick() {
    onDeleteMovie(card);
  }

  return (
    <article className="movie">
      <a href={card.trailerLink} target="_blank" rel="noreferrer">
        {card.image && (
          <img className="movie__photo" src={`${card.image}`} alt="фильм" />
        )}
      </a>
      <div className="movie__description">
        <h2 className="movie__title">{card.nameRU}</h2>
        <button
          className={`movie__like 
            ${liked && !savedPage ? "movie__like_active" : ""} 
            ${savedPage ? "movie__delete" : ""}`}
          type="button"
          aria-label="лайк"
          onClick={savedPage || liked ? handleDeleteClick : handleLikeClick}
        ></button>
      </div>
      <span className="movie__length">
        {convertDurationToHHMM(card.duration)}
      </span>
    </article>
  );
}

export default MoviesCard;
