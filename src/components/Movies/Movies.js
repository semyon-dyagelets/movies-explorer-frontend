import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from "./Preloader/Preloader";

function Movies() {
  return (
      <>
      <Header />

      <div className="movies__container">
      <SearchForm />
      
      {/* <Preloader /> */}

      <MoviesCardList />

      <button className="movies__button-showmore" type="button">Ещё</button>

      </div>

      <Footer />

    </>
  );
}

export default Movies;
