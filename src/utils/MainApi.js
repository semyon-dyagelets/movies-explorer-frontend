import { MAIN_URL, localHost } from './constants';

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

  checkToken(token) {
    return fetch(`${this._mainApiURL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
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
    nameRU,
    nameEN,
    thumbnail,
    id
}) {
  return fetch(`${this._mainApiURL}/movies`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      country: country || 'no country',
        director,
        duration,
        year,
        description,
        image: `https://api.nomoreparties.co${image.url}`,
        trailer: trailerLink,
        nameRU: nameRU || 'no name',
        nameEN: nameEN || 'no name',
        thumbnail: `https://api.nomoreparties.co${image.url}`,
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
