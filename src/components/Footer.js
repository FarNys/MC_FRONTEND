import React from "react";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="footer_column">
          <h4>Web Developement</h4>
          <li>
            <a href="https://reactjs.org/">React</a>
          </li>
          <li>
            <a href="https://sass-lang.com/">Scss</a>
          </li>
          <li>
            <a href="https://redux.js.org/">Redux Toolkit</a>
          </li>
          <li>
            <a href="https://nodejs.org/en/">NodeJs</a>
          </li>
          <li>
            <a href="https://www.mongodb.com/">MongoDB</a>
          </li>
        </div>
        <div className="footer_column">
          <h4>Extra Resources</h4>
          <li>
            <a href="https://react-slick.neostack.com/">React-Slick</a>
          </li>
          <li>
            <a href="https://mui.com/">Material UI</a>
          </li>
          <li>
            <a href="https://react-icons.github.io/react-icons/">React Icons</a>
          </li>
        </div>
      </div>
    </>
  );
};

export default Footer;
