import React from "react";
import { Route, Redirect } from "react-router-dom";
import Preloader from "../Movies/Preloader/Preloader";

const ProtectedRoute = ({ component: Component, isChecking, ...props }) => {
  return (
    <Route>
      {isChecking ? (
        <Preloader />
      ) : (
        () => (props.loggedIn ?
        <Component {...props} />
        :
        <Redirect to="./" />)
      )}
    </Route>
  );
};

export default ProtectedRoute;
