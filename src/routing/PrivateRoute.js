import React, { useState, useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { selectLogin } from "../features/userSlice";
import { setLogin } from "../features/userSlice";
import { useSelector, useDispatch } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const loginState = useSelector(selectLogin);
  const history = useHistory();
  const storageToken = localStorage.getItem("token");
  useEffect(() => {
    if (storageToken === null) {
      history.push("/login");
    }
  }, [storageToken, history]);

  return (
    <>
      <Route
        {...rest}
        render={(props) => loginState && <Component {...props} />}
      />
    </>
  );
};

export default PrivateRoute;
