import React, {useState, useEffect} from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardsList/MoviesCardsList";
import { filterMovies } from "../../utils/utils";
import "./SavedMovies.css";

function SavedMovies({ moviesList, onDeleteMovie, isError }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [shortFilms, setShortFilms] = useState("off");
  const [filteredMovies, setFilteredMovies] = useState(moviesList);
  const [isMovieNotFound, setIsMovieNotFound] = useState(false);

  function handleSearchSubmit(value) {
    setSearchQuery(value);
    const resultList = filterMovies(moviesList, searchQuery, shortFilms);
    setFilteredMovies(resultList);
  }

  function handleShortFilms(evt) {
    setShortFilms(evt.target.value);
    localStorage.setItem("shortFilms", evt.target.value);
  }

  useEffect(() => {
    const arr = filterMovies(moviesList, searchQuery, shortFilms);
    setFilteredMovies(arr);
    if (searchQuery) {
      arr.length === 0 ? setIsMovieNotFound(true) : setIsMovieNotFound(false);
    }
  }, [searchQuery, shortFilms, moviesList]);

  return (
    <section className="movies__container">
      <SearchForm
        onSearchFormSubmit={handleSearchSubmit}
        onCheckbox={handleShortFilms}
        shortFilms={shortFilms}
        savedMoviesPage={true}
      />
      <MoviesCardList
        moviesList={filteredMovies}
        savedMoviesPage={true}
        onDeleteMovie={onDeleteMovie}
        isListEmpty={isMovieNotFound}
        isError={isError}
      />
    </section>
  );
}

export default SavedMovies;
