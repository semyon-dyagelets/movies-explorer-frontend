import React from "react";
import { Switch, Route } from "react-router-dom";
import { convertDurationToHHMM } from "../../../utils/utils";
import defaultImage from "../../../images/icon-movie-default.svg";

import "./MoviesCard.css";

function MoviesCard({ card, onLikeMovie, onDeleteMovie, liked, savedPage }) {

  function handleLikeClick() {
    onLikeMovie(card);
  }

  function handleDeleteClick() {
    onDeleteMovie(card);
  }

  return (
    <article className="movie">
      <Switch>
        <Route path="/movies">
          <a
            href={card.trailerLink}
            className="card__link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="movie__photo"
              src={`${
                card.image
                  ? `https://api.nomoreparties.co${card.image.url}`
                  : defaultImage
              }`}
              alt={card.nameRU}
            />
          </a>
        </Route>
        <Route path="/saved-movies">
          <a
            href={card.trailer}
            className="card__link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="movie__photo"
              src={`${
                card.image
                  ? `${card.image}`
                  : defaultImage
              }`}
              alt={card.nameRU}
            />
          </a>
        </Route>
      </Switch>

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
