import React from "react";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="footer_column">
          <h4>Web Developement</h4>
          <li>
            <a href="#">HTML5</a>
          </li>
          <li>
            <a href="#">CSS</a>
          </li>
          <li>
            <a href="#">JavaScript</a>
          </li>
          <li>
            <a href="#">ReactJs</a>
          </li>
        </div>
        <div className="footer_column">
          <h4>Machine Learning</h4>
          <li>
            <a href="#">Python</a>
          </li>
          <li>
            <a href="#">Rust</a>
          </li>
          <li>
            <a href="#">Go</a>
          </li>
        </div>
      </div>
      <div className="copyright_container">Copyright</div>
    </>
  );
};

export default Footer;
