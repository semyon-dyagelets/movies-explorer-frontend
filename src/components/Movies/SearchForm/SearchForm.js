import React, { useEffect } from "react";
import "./SearchForm.css";
import useFormValidation from "../../../utils/useFormValidation";

function SearchForm({
  onSearchFormSubmit,
  shortFilms,
  savedMoviesPage,
  onCheckbox,
}) 
{
  const {
    values,
    setValues,
    errors,
    isFormCorrect,
    setIsFormCorrect,
    handleChange,
  } = useFormValidation();

  useEffect(() => {
    if (!savedMoviesPage) {
      const input = localStorage.getItem("searchQuery");
      if (input) {
        setValues({ query: input });
        setIsFormCorrect(true);
      }
    }
  }, [savedMoviesPage, setValues, setIsFormCorrect]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onSearchFormSubmit(values.query);
  };

  return (
    <section className="search-form__container">
      <form className="search-form__box" onSubmit={handleSubmit}>
        <div className="search-form__find-container">
          <input
            type="text"
            className="search-form__input"
            name="query"
            value={values.query || ""}
            placeholder="Фильм"
            onChange={handleChange}
            required
          ></input>
          <span className="search-form__error-text" id="movie-error">
            {errors.query ? "Введите слово или букву" : ""}
          </span>
          <button
            className="search-form__button-find"
            type="submit"
            disabled={!isFormCorrect}
          ></button>
        </div>

        <div className="search-form__filter-box">
          <label
            className={`search-form__filter
            ${shortFilms === "on" ? "search-form__filter_active" : null}`}
          >
            <input
              className="search-form__radio search-form__radio_off"
              type="radio"
              name="shortFilms"
              value="off"
              checked={shortFilms === "off" ? true : false}
              onChange={onCheckbox}
            />
            <input
              className="search-form__radio search-form__radio_on"
              type="radio"
              name="shortFilms"
              value="on"
              checked={shortFilms === "on" ? true : false}
              onChange={onCheckbox}
            />
            <span className="search-form__switch"></span>
          </label>
          <p className="search-form__filter-name">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
