import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/Register.css";
import { useDispatch } from "react-redux";
import { setLogin } from "../features/userSlice";
import { baseURL } from "../App";
const Register = () => {
  const history = useHistory();
  //USE STATE PARAMETER
  const dispatch = useDispatch();
  const [check, setcheck] = useState();
  const [alert, setalert] = useState();
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
    console.log(userInfo);
  };
  //CREATE ACCOUNT BUTTON TO SEND SAVED USERINFO TO SERVER
  const createAccount = async (e) => {
    e.preventDefault();
    if (userInfo.name && userInfo.password) {
      try {
        const result = await fetch(`${baseURL}/register`, {
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
        localStorage.setItem("token", data.token);
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="register_container">
      {alert && <h5>{alert.msg}</h5>}
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
      <h6>
        If You Have Already an Account{" "}
        <li>
          <Link to="/login">Click</Link> here .
        </li>
      </h6>
    </div>
  );
};

export default Register;
