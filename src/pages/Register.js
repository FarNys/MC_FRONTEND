import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/Register.css";
import { useDispatch } from "react-redux";
import { setLogin } from "../features/userSlice";
import { baseURL } from "../App";
import Fade from "react-reveal/Fade";

const Register = () => {
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const history = useHistory();
  //USE STATE PARAMETER
  const dispatch = useDispatch();
  const [check, setcheck] = useState();
  const [alert, setalert] = useState({ state: false, msg: "Fill all inputs" });
  const [success, setsuccess] = useState("Account has been created");
  const [successState, setsuccessState] = useState(false);
  const [userInfo, setuserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  //ON CHANGE FUNCTION TO SAVE ALLDATA
  const onChange = (e) => {
    setuserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  //CREATE ACCOUNT BUTTON TO SEND SAVED USERINFO TO SERVER
  const createAccount = async (e) => {
    e.preventDefault();

    if (!userInfo.name || !userInfo.password || !userInfo.email) {
      setalert({ state: true, msg: "Please fill all fields" });
      setTimeout(() => {
        setalert({ state: false, msg: "" });
      }, 3000);
    } else if (!validateEmail(userInfo.email)) {
      setalert({ state: true, msg: "Need a valid email" });
      setTimeout(() => {
        setalert({ state: false, msg: "" });
      }, 3000);
    } else {
      try {
        const result = await fetch(`${baseURL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: userInfo.name,
            email: userInfo.email,
            password: userInfo.password,
          }),
        });
        const data = await result.json();
        if (data.errors) {
          setalert({ state: true, msg: data.errors[0].msg });
          setTimeout(() => {
            setalert({ state: false, msg: "" });
          }, 3000);
        } else {
          localStorage.setItem("token", data.token);
          history.push("/login");
        }
      } catch (error) {
        setalert({ state: true, msg: error });
        setTimeout(() => {
          setalert({ state: false, msg: "" });
        }, 3000);
      }
    }
  };

  return (
    <div className="register_page_container">
      <div className="register_container">
        {alert.state && (
          <Fade top>
            <div className="alert_container">
              <h4>{alert.msg}</h4>
            </div>
          </Fade>
        )}
        {successState && <h5>{success}</h5>}
        <h3>Create Account</h3>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={onChange}
            required
            value={userInfo.name}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={onChange}
            required
            value={userInfo.email}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={onChange}
            required
            value={userInfo.password}
          />
          <button onClick={createAccount} type="submit">
            Create Account
          </button>
        </form>
        <div className="under_creat_account">
          If You Have Already an Account{" "}
          <li>
            <Link to="/login">Click</Link>
          </li>
          here
        </div>
      </div>
    </div>
  );
};

export default Register;
