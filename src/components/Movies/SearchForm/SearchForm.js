// import "./SearchForm.css";

// function SearchForm() {
//   return (
//     <section className="search-form__container">
//       <form className="search-form__box">
//         <input
//           className="search-form__input"
//           name="movie"
//           placeholder="Фильм"
//           required
//         ></input>

//         <div className="search-form__buttons-container">
//           <button className="search-form__button-find" type="submit"></button>
//           <div className="search-form__shortfilms-container">
//             <input
//               className="search-form__shortfilms-toggle"
//               id="shortfilms"
//               type="checkbox"
//             />
//             <label
//               for="shortfilms"
//               className="search-form__shortfilms-condition"
//             >
//               Короткометражки
//             </label>
//           </div>
//         </div>
//       </form>
//     </section>
//   );
// }

// export default SearchForm;

// ТЕСТОВЫЙ

import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search-form__container">
      <form className="search-form__box">
        <div className="search-form__find-container">
          <input
            className="search-form__input"
            name="movie"
            placeholder="Фильм"
            required
          ></input>
          <button className="search-form__button-find" type="submit"></button>
        </div>

        <div className="search-form__shortfilms-container">
          <input
            className="search-form__shortfilms-toggle"
            id="shortfilms"
            type="checkbox"
          />
          <label for="shortfilms" className="search-form__shortfilms-condition">
            Короткометражки
          </label>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
