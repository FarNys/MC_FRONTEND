import React from "react";
import { AiFillRightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../styles/LoginComp.css";
const LoginComp = () => {
  return (
    <div className="loginComp_container">
      <div className="loginComp_container_left">
        <p>Not account yet? Register here</p>
        <AiFillRightCircle className="icon_finger" />
      </div>
      <Link to="/register" className="register_conteiner">
        Register
      </Link>
    </div>
  );
};

export default LoginComp;
