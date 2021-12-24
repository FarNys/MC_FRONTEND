import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import SpeedIcon from "@material-ui/icons/Speed";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Footer from "../components/Footer";
import Review from "../components/Review";
import SendReview from "../components/SendReview";
import ReceiveReview from "../components/ReceiveReview";
import { AiFillEdit } from "react-icons/ai";
import { AiFillFileAdd } from "react-icons/ai";
import { DiHeroku } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaAdversal } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { MdViewCarousel } from "react-icons/md";
import LoginComp from "../components/LoginComp";

const textHome = "Make Your Own Cards";
const texthome = "Try It Free";
const Home = () => {
  return (
    <div className="home_container">
      <div className="home_inner">
        <div className="home_title_container">
          {textHome.split(" ").map((el) => (
            <h1>{el}</h1>
          ))}
        </div>
        <div className="home_title_container">
          {texthome.split(" ").map((el) => (
            <h2>{el}</h2>
          ))}
        </div>
      </div>
      <div className="mid_container_part_one">
        <h1>Features</h1>
        <div className="spec_container">
          <div className="spec_items">
            {" "}
            <AiFillEdit className="icon_home" style={{ fontSize: 32 }} />
            <h5>Editable</h5>
            <p>
              After creating a card you can dit your existed card inside Allcard
              or Wishlist Page by clicking on edit icon.
            </p>
          </div>
          <div className="spec_items">
            {" "}
            <AiFillFileAdd className="icon_home" style={{ fontSize: 32 }} />
            <h5>Unlimited</h5>
            <p>
              Do you want a memorycard collection? don't worry, you can create
              as many as you wish.
            </p>
          </div>
          <div className="spec_items">
            {" "}
            <FaAdversal className="icon_home" style={{ fontSize: 32 }} />
            <h5>Ad Free</h5>
            <p>There is no ad or limit condition, completely free.</p>
          </div>
        </div>
      </div>
      <div className="mid_container_part_one">
        <h1>Main Technology</h1>
        <div className="spec_container">
          <a href="https://reactjs.org/" className="spec_items_icons">
            <h4>React</h4>
            <FaReact className="icon_home" />
          </a>
          <a href="https://redux.js.org/" className="spec_items_icons">
            <h4>Redux</h4>
            <SiRedux className="icon_home" />
          </a>
          <a href="https://nodejs.org/en/" className="spec_items_icons">
            <h4>NodeJs</h4>
            <FaNodeJs className="icon_home" />
          </a>
          <a href="https://www.mongodb.com/" className="spec_items_icons">
            <h4>MongoDB</h4>
            <DiMongodb className="icon_home" />
          </a>
          {/* <a href="https://www.heroku.com/" className="spec_items_icons">
            <h4>Heroku</h4>
            <DiHeroku className="icon_home" />
          </a> */}
        </div>
      </div>
      <div className="mid_container_part_one two">
        <h1>UI</h1>
        <div className="spec_container">
          <a href="https://sass-lang.com/" className="spec_items_icons">
            <h4>Sass</h4>
            <DiSass className="icon_home" />
          </a>
          <a href="https://mui.com/" className="spec_items_icons">
            <h4>Material UI</h4>
            <svg
              className="icon_home"
              viewBox="0 0 40 40"
              width="32"
              height="32"
            >
              <path
                className="spec_items_icons"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z"
                fill="#007FFF"
              ></path>
            </svg>
          </a>
          <a
            href="https://react-icons.github.io/react-icons/"
            className="spec_items_icons"
          >
            {" "}
            <h4>React Icons</h4>
            <svg
              className="icon_home"
              xmlns="http://www.w3.org/2000/svg"
              width="4rem"
              height="4rem"
              fill="none"
              viewBox="0 0 642 642"
            >
              <g>
                <path
                  stroke="#E91E63"
                  className="spec_items_icons"
                  stroke-miterlimit="10"
                  stroke-width="24"
                  d="M274.151 201.657c66.903-17.997 131.399-24.32 182.018-19.756l1.077-11.95-1.077 11.95c30.477 2.747 55.643 9.518 73.763 18.622 18.414 9.252 27.823 19.969 30.45 29.72h0c2.776 10.303-.231 25.206-12.364 43.484-11.936 17.98-31.68 37.56-58.646 56.139v.001c-40.663 28.018-98.24 52.637-161.885 69.759-65.406 17.596-128.7 26.024-178.487 21.651h0c-31.569-2.772-57.609-10.095-76.356-19.82-19.058-9.886-28.938-21.326-31.677-31.495h0c-2.636-9.786-.088-23.613 10.677-40.523 10.622-16.687 28.385-34.904 52.944-52.425l-6.724-9.425 6.724 9.425c41.556-29.647 101.985-57.176 169.563-75.357zm0 0l-3.116-11.583 3.116 11.583z"
                ></path>
                <path
                  stroke="#E91E63"
                  stroke-miterlimit="10"
                  stroke-width="24"
                  d="M373.214 228.061c49.036 48.941 86.758 101.635 108.114 147.755l10.889-5.042-10.889 5.042c12.859 27.768 19.578 52.949 20.754 73.194 1.194 20.573-3.382 34.081-10.514 41.232h0c-7.535 7.555-21.944 12.403-43.839 11.035-21.539-1.346-48.366-8.656-77.939-22.719l-.001-.001c-44.594-21.205-94.702-58.759-141.351-105.317l-8.138 8.153 8.138-8.153c-47.94-47.846-86.885-98.447-107.99-143.751h0c-13.383-28.726-20.062-54.939-21.013-76.038-.967-21.448 4-35.725 11.437-43.182h0c7.157-7.176 20.405-11.883 40.432-11.016 19.761.856 44.419 7.13 71.872 19.639l4.975-10.92-4.975 10.92c46.451 21.165 100.505 59.734 150.038 109.169zm0 0l8.477-8.494-8.477 8.494z"
                ></path>
                <path
                  stroke="#E91E63"
                  stroke-miterlimit="10"
                  stroke-width="24"
                  d="M325.98 494.55l9.811 6.909-9.811-6.909c-17.619 25.02-36.067 43.429-53.012 54.569-17.221 11.322-31.207 14.112-40.966 11.511h0c-10.311-2.747-21.714-12.801-31.476-32.447-9.604-19.326-16.687-46.213-19.294-78.855v-.001c-3.933-49.221 3.537-111.393 20.533-175.07l-11.594-3.095 11.594 3.095c17.467-65.44 41.817-124.466 70.5-165.396h0c18.186-25.953 37.549-44.843 55.345-56.216 18.091-11.562 32.94-14.398 43.117-11.686h0c9.793 2.61 20.494 11.73 29.756 29.506 9.139 17.541 16.035 42.032 18.928 72.06 4.896 50.811-1.48 116.906-19.526 184.519-17.867 66.937-44.642 125.951-73.905 167.506z"
                ></path>
                {/* <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  dur="20s"
                  from="0 301 301"
                  repeatCount="indefinite"
                  to="360 301 301"
                  type="rotate"
                ></animateTransform> */}
              </g>
              <path
                fill="#E91E63"
                d="M301.007 269.002a62.496 62.496 0 00-4.799-4.301c-1.568-1.254-3.439-2.596-5.615-4.026a30.06 30.06 0 00-7.055-3.411c-2.527-.842-5.007-1.264-7.436-1.264-8.779 0-15.657 2.43-20.635 7.29-4.979 4.859-7.467 11.601-7.467 20.223 0 8.661 4.488 17.479 13.463 26.455 0 0 24.492 21.967 39.544 36.043 15.053-14.076 39.545-36.043 39.545-36.043 8.975-8.976 13.463-17.794 13.463-26.455 0-8.622-2.488-15.364-7.467-20.223-4.978-4.86-11.856-7.29-20.635-7.29-2.429 0-4.909.422-7.436 1.264a30.06 30.06 0 00-7.055 3.411c-2.176 1.43-4.047 2.772-5.615 4.026a62.699 62.699 0 00-4.8 4.301z"
              ></path>
            </svg>
          </a>
          <a
            href="https://react-slick.neostack.com/"
            className="spec_items_icons"
          >
            <h4>React-Slick</h4>
            <MdViewCarousel className="icon_home" />
          </a>
        </div>
      </div>

      <LoginComp />
      <ReceiveReview />
      <SendReview />
    </div>
  );
};

export default Home;
