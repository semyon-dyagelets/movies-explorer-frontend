import "./SavedMovies.css";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Movies() {
  return (
    <>
      <Header />
      <div className="movies__container">
        <SearchForm />
        <MoviesCardList />
        <button className="movies__button-showmore" type="button">
          Ещё
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Movies;
