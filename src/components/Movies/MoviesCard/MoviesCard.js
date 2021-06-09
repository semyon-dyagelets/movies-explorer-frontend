import "./MoviesCard.css";
import { convertDurationToHHMM } from "../../../utils/utils";

function MoviesCard({ card, onLikeMovie, onDeleteMovie, liked, savedPage }) {

  const imageUrl = card?.image?.url ?
   `${'https://api.nomoreparties.co'}${card?.image?.url}`
   :
    card.image;

  function handleLikeClick() {
    onLikeMovie(card);
  }

  function handleDeleteClick() {
    onDeleteMovie(card);
  }


  return (
    <article className="movie">
      <a href={card.trailerLink} target="_blank" rel="noreferrer">
        <img className="movie__photo" src={imageUrl} alt="фильм" />
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
