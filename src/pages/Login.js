import React, { useState, useEffect, useRef } from "react";
import "../styles/Register.css";
import { useHistory } from "react-router-dom";
import {
  selectusername,
  selectLogin,
  setLogin,
  selectemail,
} from "../features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import Fade from "react-reveal/Fade";
import Loader from "react-js-loader";
import { baseURL } from "../App";
const Login = () => {
  //DECLARE USER EMAIL AND PW TO SEND TO SERVER
  const [user, setuser] = useState({ email: "", password: "" });
  const [check, setcheck] = useState();
  const [alert, setalert] = useState(false);
  const history = useHistory();
  const loginState = useSelector(selectLogin);
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);

  //ON CHANGE FUNCTION FOR INPUT
  const onChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  //USE EFFECT FOR AUTO LOGIN

  //USE diSPATCH TO CHANGE USERNAME AND LOGIN STATE FROM NULL TO OUR DATA AFTER LOGIN SUCCESFULL

  //LOGIN BUTTON HANDLER FOR SEND DATA TO BACKEND
  const loginHandler = async (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      setloading(true);
      try {
        const res = await fetch(`${baseURL}/login`, {
          method: "POST",
          headers: {
            "x-auth-token": localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            password: user.password,
          }),
        });
        const data = await res.json();
        dispatch(
          setLogin({
            isLogin: true,
            email: data.user.email,
            username: data.user.name,
          })
        );
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("pw", data.user.password);
        localStorage.setItem("token", data.token);
        setloading(false);
        history.push("/");
      } catch (error) {
        setalert(true);
        setTimeout(() => {
          setalert(false);
        }, 3000);
        setloading(false);
      }
    } else {
      setalert(true);
      setTimeout(() => {
        setalert(false);
      }, 3000);
      setloading(false);
    }
  };
  // if (loading) {
  //   return (
  //     <Loader
  //       type="bubble-loop"
  //       bgColor={"#c33764"}
  //       color={"#c33764"}
  //       size={50}
  //     />
  //   );
  // }
  return (
    <div className="login_container_box">
      {loading ? (
        <Loader
          type="bubble-loop"
          bgColor={"#c33764"}
          color={"#c33764"}
          size={50}
        />
      ) : (
        <div className="login_container">
          <h3>Login</h3>
          {alert && (
            <Fade top>
              <div className="alert_container">
                <h4>Email Or Password is Wrong!</h4>
              </div>
            </Fade>
          )}

          <form>
            <label htmlFor="password">Email</label>
            <input
              type="text"
              placeholder="email"
              name="email"
              onChange={onChange}
              value={user.email}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={onChange}
              value={user.password}
            />
            <button onClick={loginHandler}>Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
