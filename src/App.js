import React, { useState, useEffect } from "react";
import "./App.css";
import { selectLogin, setLogin } from "./features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AllCards from "./pages/AllCards";
import Wishlist from "./pages/Wishlist";
import Navbar from "./components/Navbar";
import Create from "./pages/Create";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import PrivateRoute from "./routing/PrivateRoute";
import DynamicPage from "./pages/DynamicPage";
import Footer from "./components/Footer";
// export const baseURL = "https://deploymc.herokuapp.com";
export const baseURL = "https://mcard-backend.herokuapp.com";
function App() {
  const dispatch = useDispatch();
  const loginState = useSelector(selectLogin);
  console.log(loginState);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${baseURL}/login`, {
        method: "GET",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      const data = await result.json();
      if (data.msg) {
        console.log("hi");
      }
      if (!data.msg) {
        dispatch(
          setLogin({
            isLogin: true,
            email: data.email,
            username: data.name,
          })
        );
      }
    };
    fetchData();
  }, [dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/allcards" component={AllCards} exact />
          <PrivateRoute path="/wishlist" component={Wishlist} />
          <PrivateRoute path="/create" component={Create} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/allcards/:id" component={DynamicPage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
