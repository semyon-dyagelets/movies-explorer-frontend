import "./Profile.css";
import React, { useEffect, useState } from "react";
import useFormValidation from "../../utils/useFormValidation.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ onUpdateUser, onSignOut }) {
  const currentUser = React.useContext(CurrentUserContext);
  const {
    values,
    setValues,
    errors,
    isFormCorrect,
    setIsFormCorrect,
    handleChange,
  } = useFormValidation();

  const [isEditingAvailable, setIsEditingAvailable] = useState(false);

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [setValues, currentUser]);

  useEffect(() => {
    if (
      currentUser.name === values.name &&
      currentUser.email === values.email
    ) {
      setIsFormCorrect(false);
    }
  }, [currentUser, values, setIsFormCorrect]);

  function handleEditProfile() {
    setIsEditingAvailable(true);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateUser(values.name, values.email);
  };

  return (
    <>
      <div className="authorization">
        <div className="authorization__container profile__container">
          <h2 className="authorization__title profile__title">
            {`Привет, ${currentUser.name}!`}
          </h2>
          <form
            className="authorization__form"
            name="profile"
            method="POST"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="profile__input-container">
              <p className="profile__input-name">Имя</p>
              <input
                className="authorization__input profile__input"
                id="name"
                name="name"
                type="text"
                value={values.name || ""}
                minLength="2"
                maxLength="30"
                required
                pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
                onChange={handleChange}
                disabled={!isEditingAvailable}
              ></input>
              <span id="name-error" className="profile__error-input">
                {errors.name
                  ? "Поле должно быть заполнено и содержать только буквы, пробел или дефис"
                  : ""}
              </span>
            </div>
            <div className="profile__input-container">
              <p className="profile__input-name">E-mail</p>
              <input
                className="authorization__input profile__input"
                id="email"
                name="email"
                type="email"
                required
                value={values.email || ""}
                onChange={handleChange}
                disabled={!isEditingAvailable}
              ></input>
              <span id="email-error" className="profile__error-input">
                {errors.email || ""}
              </span>
            </div>

            {isEditingAvailable ? (
              <button
                className="authorization__button profile__button"
                type="submit"
                disabled={!isFormCorrect}
              >
                Сохранить
              </button>
            ) : (
              <button
                className="authorization__button profile__button"
                type="button"
                onClick={handleEditProfile}
              >
                Редактировать
              </button>
            )}
          </form>
          <p className="app__link profile__link" onClick={onSignOut}>
            Выйти из аккаунта
          </p>
        </div>
      </div>
    </>
  );
}

export default Profile;
