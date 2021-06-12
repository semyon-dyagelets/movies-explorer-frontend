import React, { useState, useEffect } from "react";
import { Redirect, Switch } from "react-router";
import { Route, useHistory } from "react-router-dom";

import Header from "../Header/Header";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import mainApi from "../../utils/MainApi";
import Preloader from "../Movies/Preloader/Preloader";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import "./App.css";

function App() {
  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isInfoErrorShown, setIsInfoErrorShown] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUserInfo()
        .then((userInfo) => {
          setLoggedIn(true);
          setCurrentUser(userInfo);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUsersMovies()
        .then((data) => {
          setSavedMovies(data);
          setIsError(false);
        })
        .catch((err) => {
          setIsError(true);
          console.log(err);
        });
    }
  }, [loggedIn]);

  function handleRegister(name, email, password) {
    setIsLoading(true);
    mainApi
      .register(name, email, password)
      .then((data) => {
        if (data) {
          handleLogin(email, password);
          // history.push("/movies");
        }
      })
      .catch((err) => {
        setIsInfoErrorShown(true);
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }

  function handleLogin(email, password) {
    setIsLoading(true);
    mainApi
      .login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => {
        console.log(err);
        setIsInfoErrorShown(true);
      })
      .finally(() => setIsLoading(false));
  }

  const [isAuthChecking, setIsAuthChecking] = React.useState(true);

  const checkLogin = React.useCallback(() => {
    setIsAuthChecking(true);
    const token = localStorage.getItem("token");
    if (token) {
      mainApi
        .checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setCurrentUser(res);
            history.push("/movies");
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setIsAuthChecking(false));
    } else {
      setIsAuthChecking(false);
    }
  }, [history]);

  useEffect(() => {
    checkLogin();
  }, [checkLogin]);

  function handleUpdateUser(name, email) {
    mainApi
      .editProfile(name, email)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSignOut() {
    localStorage.removeItem("jwt");
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.clear();
    history.push("/");
    console.log(localStorage.clear);
  }

  function handleSaveMovie(card) {
    mainApi
      .addMovie(card)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDeleteMovie(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        const newMoviesList = savedMovies.filter((m) =>
          m._id === movie._id ? false : true
        );
        setSavedMovies(newMoviesList);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Header loggedIn={loggedIn} />

            <Switch>
              <ProtectedRoute
                isChecking={isAuthChecking}
                exact
                path="/movies"
                loggedIn={loggedIn}
                component={Movies}
                savedMoviesList={savedMovies}
                onLikeMovie={handleSaveMovie}
                onDeleteMovie={handleDeleteMovie}
              />

              <ProtectedRoute
                isChecking={isAuthChecking}
                exact
                path="/saved-movies"
                loggedIn={loggedIn}
                component={SavedMovies}
                moviesList={savedMovies}
                onDeleteMovie={handleDeleteMovie}
                isError={isError}
              />

              <ProtectedRoute
                isChecking={isAuthChecking}
                exact
                path="/profile"
                loggedIn={loggedIn}
                component={Profile}
                onSignOut={handleSignOut}
                onUpdateUser={handleUpdateUser}
              />

              <Route exact path="/">
                <Main />
              </Route>

              <Route path="/signin">
                {loggedIn ? (
                  <Redirect to="/movies" />
                ) : (
                  <Login
                    onLogin={handleLogin}
                    isErrorShown={isInfoErrorShown}
                  />
                )}
              </Route>

              <Route path="/signup">
                {loggedIn ? (
                  <Redirect to="/movies" />
                ) : (
                  <Register
                    onRegister={handleRegister}
                    isErrorShown={isInfoErrorShown}
                  />
                )}
              </Route>

              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>

            <Footer />
          </>
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
