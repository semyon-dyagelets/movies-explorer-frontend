import React, { useEffect, useState } from "react";
import MoviesCardsList from "./MoviesCardsList/MoviesCardsList";
import SearchForm from "./SearchForm/SearchForm";
import {
  filterMovies,
  filterShortMovies,
  setDefaultImage,
} from "../../utils/utils";
import moviesApi from "../../utils/MoviesApi";
import "./Movies.css";

function Movies({ onDeleteMovie, onLikeMovie, savedMovies }) {

  const forCheckbox =
    localStorage.getItem("shortFilms") === "on" ? 
    "on" 
    :
    "off";

  const [searchQuery, setSearchQuery] = useState("");
  const [shortFilms, setShortFilms] = useState(forCheckbox);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [isMovieNotFound, setIsMovieNotFound] = useState(false);
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);
  const [isError, setIsError] = React.useState(false);

  function handleSetFilteredMovies(movies, query, checkbox) {
    const moviesList = filterMovies(movies, query);
    setFilteredMovies(
      checkbox === "on" ? 
      filterShortMovies(moviesList) 
      :
      moviesList
    );
    localStorage.setItem("movies", JSON.stringify(moviesList));
  }

  function handleSearchSubmit(value) {
    setIsMoviesLoading(true);
    setSearchQuery(value);
    localStorage.setItem("searchQuery", value);
    localStorage.setItem("shortFilms", shortFilms);

    if (!allMovies.length) {
      moviesApi
        .getInitialMovies()
        .then((data) => {
          console.log(data);
          setDefaultImage(data);
          setAllMovies(data);
          handleSetFilteredMovies(data, value, shortFilms);
        })
        .catch((err) => {
          setIsError(true);
          console.log(err);
        })
        .finally(() => setIsMoviesLoading(false));
    } else {
      handleSetFilteredMovies(allMovies, value, shortFilms);
      setIsMoviesLoading(false);
    }
  }

  function handleShortFilms(evt) {
    setShortFilms(evt.target.value);
    localStorage.setItem("shortFilms", evt.target.value);
  }

  function handleCheckFilteredMovies(arr) {
    arr.length === 0 ? setIsMovieNotFound(true) : setIsMovieNotFound(false);
  }

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("movies"));
    if (arr && !searchQuery) {
      setShortFilms(localStorage.getItem("shortFilms"));
      setFilteredMovies(shortFilms === "on" ? filterShortMovies(arr) : arr);
      handleCheckFilteredMovies(arr);
    }
  }, [shortFilms, searchQuery]);

  useEffect(() => {
    if (searchQuery) {
      const arr = filterMovies(allMovies, searchQuery, shortFilms);
      setFilteredMovies(arr);
      handleCheckFilteredMovies(arr);
    }
  }, [searchQuery, shortFilms, allMovies]);

  return (
    <section className="movies__container">
      <SearchForm
        onSearchFormSubmit={handleSearchSubmit}
        onCheckbox={handleShortFilms}
        shortFilms={shortFilms}
      />

      <MoviesCardsList
        isLoading={isMoviesLoading}
        moviesList={filteredMovies}
        isListEmpty={isMovieNotFound}
        isError={isError}
        onDeleteMovie={onDeleteMovie}
        onLikeMovie={onLikeMovie}
        savedMovies={savedMovies}
      />
    </section>
  );
}

export default Movies;
