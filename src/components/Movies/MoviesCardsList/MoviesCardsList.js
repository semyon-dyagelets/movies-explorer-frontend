import React, { useState } from "react";
import "./MoviesCardsList.css";
import { getSavedMovie, useWindowWidth } from "../../../utils/utils";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardsList({
  isLoading,
  moviesList,
  isListEmpty,
  isError,
  onLikeMovie,
  onDeleteMovie,
  savedMovies,
  savedMoviesPage,
}) {
  const width = useWindowWidth();
  const [showList, setShowList] = useState([]);
  const [cardsShowParams, setCardsShowParams] = useState({ sum: 0, more: 0 });
  const [isMount, setIsMount] = useState(true);

  React.useEffect(() => {
    if (width > 1331) {
      setCardsShowParams({ sum: 8, more: 4 });
    } else if (width <= 1331 && width > 1027) {
      setCardsShowParams({ sum: 12, more: 3 });
    } else if (width <= 1027 && width > 629) {
      setCardsShowParams({ sum: 8, more: 2 });
    } else if (width <= 629) {
      setCardsShowParams({ sum: 5, more: 2 });
    }
    return () => setIsMount(false);
  }, [width, isMount]);

  React.useEffect(() => {
    if (moviesList.length && !savedMoviesPage) {
      const res = moviesList.filter(
        (item, index) => index < cardsShowParams.sum
      );
      setShowList(res);
    }
  }, [moviesList, savedMoviesPage, cardsShowParams.sum]);

  function handleShowMore() {
    const start = showList.length;
    const finish = start + cardsShowParams.more;
    const residual = moviesList.length - start;

    if (residual > 0) {
      const newCards = moviesList.slice(start, finish);
      setShowList([...showList, ...newCards]);
    }
  }

  function getSavedMoviesPage() {
    return moviesList.map((item) => (
      <MoviesCard
        key={item._id}
        card={item}
        savedPage={savedMoviesPage}
        onDeleteMovie={onDeleteMovie}
      />
    ));
  }

  function getInitialMoviesPage() {
    return showList.map((item) => {
      const likedMovieCard = getSavedMovie(savedMovies, item.id);
      const likedMovieId = likedMovieCard ? likedMovieCard._id : null;
      return (
        <MoviesCard
          key={item.id}
          card={{ ...item, _id: likedMovieId }}
          onLikeMovie={onLikeMovie}
          onDeleteMovie={onDeleteMovie}
          liked={likedMovieCard ? true : false}
        />
      );
    });
  }

  return (
    <>
      <section className="movies">
        {isLoading ? (
          <Preloader />
        ) : isListEmpty || isError ? (
          <p
            className={`movies-list__message ${
              isError && "movies-list__message_type_err"
            }`}
          >
            {isError
              ? `Во время запроса произошла ошибка. 
              Возможно, проблема с соединением или сервер недоступен.
              Подождите немного и попробуйте ещё раз.`
              : "Ничего не найдено"}
          </p>
        ) : (
          <>{savedMoviesPage ? getSavedMoviesPage() : getInitialMoviesPage()}</>
        )}
      </section>
      <button
        className={`movies__button-showmore 
      ${
        (savedMoviesPage ||
          isListEmpty ||
          showList.length === moviesList.length) &&
        "movies__button-showmore_hidden"
      }`}
        type="button"
        aria-label="Показать еще"
        onClick={handleShowMore}
      >
        Ещё
      </button>
    </>
  );
}

export default MoviesCardsList;
