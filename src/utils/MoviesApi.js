import { MOVIES_URL } from "./constants";

class MoviesAPI {
  constructor({ moviesURL }) {
    this._moviesURL = moviesURL;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getInitialMovies() {
    return fetch(`${this._moviesURL}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }

}

const moviesApi = new MoviesAPI({
  moviesURL: MOVIES_URL,
});

export default moviesApi;
