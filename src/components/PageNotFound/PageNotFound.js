import "./PageNotFound.css";
import { useHistory } from "react-router-dom";

function PageNotFound() {
  let history = useHistory();

  return (
    <div className="page-not-found__container">
      <h2 className="page-not-found__title">404</h2>
      <p className="page-not-found__subtitle">Страница не найдена</p>
      <button
        className="page-not-found__back-button"
        type="button"
        onClick={() => history.goBack()}
      >
        Назад
      </button>
    </div>
  );
}

export default PageNotFound;
