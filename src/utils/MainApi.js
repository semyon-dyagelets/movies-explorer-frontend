import { MAIN_URL } from './constants';

class MainAPI {
  constructor({ mainApiURL }) {
    this._mainApiURL = mainApiURL;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  register(name, email, password) {
    return fetch(`${this._mainApiURL}/signup`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then(this._checkResponse);
  }

  login(email, password) {
    return fetch(`${this._mainApiURL}/signin`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`${this._mainApiURL}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }

  editProfile(name, email) {
    return fetch(`${this._mainApiURL}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._checkResponse);
  }

  getUsersMovies() {
    return fetch(`${this._mainApiURL}/movies`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }

  addMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    nameRU,
    nameEN,
    id,
  // data
}) {
    return fetch(`${this._mainApiURL}/movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: country || 'no country',
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: `${'https://api.nomoreparties.co'}${image.url}`,
        trailer: trailerLink,
        thumbnail: `${'https://api.nomoreparties.co'}${image.formats.thumbnail.url}`,
        nameRU: nameRU || 'no name',
        nameEN: nameEN || 'no name',
        movieId: id,
      }),
    }).then(this._checkResponse);
  }

  deleteMovie(movieId) {
    return fetch(`${this._mainApiURL}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then(this._checkResponse);
  }
}

const mainApi = new MainAPI({
  mainApiURL: MAIN_URL,
});

export default mainApi;
