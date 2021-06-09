import React from "react";
import "./SavedMovies.css";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardsList/MoviesCardsList";
import { filterMovies } from "../../utils/utils";

function SavedMovies({ moviesList, onDeleteMovie, isError }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [shortFilms, setShortFilms] = React.useState("off");
  const [filteredMovies, setFilteredMovies] = React.useState(moviesList);
  const [isMovieNotFound, setIsMovieNotFound] = React.useState(false);

  function handleSearchSubmit(value) {
    setSearchQuery(value);
    const resultList = filterMovies(moviesList, searchQuery, shortFilms);
    setFilteredMovies(resultList);
  }

  function handleShortFilms(e) {
    setShortFilms(e.target.value);
  }

  React.useEffect(() => {
    const arr = filterMovies(moviesList, searchQuery, shortFilms);
    setFilteredMovies(arr);
    if (searchQuery) {
      arr.length === 0 ? setIsMovieNotFound(true) : setIsMovieNotFound(false);
    }
  }, [searchQuery, shortFilms, moviesList]);

  return (
    <section className="movies__container">
      <SearchForm
        onSearchClick={handleSearchSubmit}
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
