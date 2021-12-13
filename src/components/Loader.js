import React from "react";
import { Link } from "react-router-dom";
import "../styles/Loader.css";
const Loader = () => {
  return (
    <>
      <div className="loader_container">
        <span className="loader_inner"></span>
        <span className="loader_inner"></span>
        <span className="loader_inner"></span>
      </div>
      <div className="link_container">
        <Link to="/">Home</Link>
      </div>
    </>
  );
};

export default Loader;
