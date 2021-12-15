import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import "../styles/DynamicPage.css";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import NotesIcon from "@material-ui/icons/Notes";
import Loader from "react-js-loader";
import { baseURL } from "../App";
import {
  setCurrentData,
  selectDynamicData,
  changeToArr,
  selectAllFields,
} from "../features/dynamicSlice";
const DynamicPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [cardData, setcardData] = useState();
  const [loading, setloading] = useState(true);
  const [createdTime, setcreatedTime] = useState();
  // const dynamicData = useSelector(selectDynamicData);
  const fieldsData = useSelector(selectAllFields);
  useEffect(() => {
    setloading(true);
    async function getCard() {
      try {
        const res = await fetch(`${baseURL}/allcards/${id}`, {
          method: "GET",
          headers: {
            "x-auth-token": localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setcardData(data);

        dispatch(setCurrentData({ getDynamic: data }));
        dispatch(changeToArr({ getField: data.fields[0] }));
        let current_datetime = new Date(data.mytimestamp);
        let formatted_date =
          current_datetime.getFullYear() +
          "-" +
          (current_datetime.getMonth() + 1) +
          "-" +
          current_datetime.getDate() +
          " " +
          current_datetime.getHours() +
          ":" +
          current_datetime.getMinutes() +
          ":" +
          current_datetime.getSeconds();
        setcreatedTime(formatted_date);
      } catch (error) {
        console.log(error);
      }
    }
    getCard();
    setloading(false);
  }, [id, dispatch]);

  if (loading) {
    return (
      <div className="loader_container">
        <Loader
          type="bubble-loop"
          bgColor={"#c33764"}
          color={"#c33764"}
          size={50}
        />
      </div>
    );
  }
  if (!cardData) {
    return (
      <div className="loader_container">
        <Loader
          type="bubble-loop"
          bgColor={"#c33764"}
          color={"#c33764"}
          size={50}
        />
      </div>
    );
  } else {
    return (
      <div className="dynamicpage_container">
        <div className="image_one image_one_one">
          <img
            src="https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blt9d192b3cf0136b40/5f32b37c9751e50576cbbdd3/particle-medium-blue.svg"
            alt=""
          />
        </div>
        <div className="image_one image_one_two">
          <img
            src="https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blt9d192b3cf0136b40/5f32b37c9751e50576cbbdd3/particle-medium-blue.svg"
            alt=""
          />
        </div>
        <div className="image_one image_one_three">
          <img
            src="https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blt9d192b3cf0136b40/5f32b37c9751e50576cbbdd3/particle-medium-blue.svg"
            alt=""
          />
        </div>
        <div className="image_one image_one_four">
          <img
            src="https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blt9d192b3cf0136b40/5f32b37c9751e50576cbbdd3/particle-medium-blue.svg"
            alt=""
          />
        </div>
        <div
          className="dynamic_card_box"
          // style={{ backgroundImage: "url(/images/dynamic.jpg)" }}
        >
          <h1>{cardData.title}</h1>

          <div className="dynamic_card_container">
            <div className="dynamic_left_side">
              <img src={cardData.image} alt={cardData.title} />
            </div>
            <div className="dynamic_right_side">
              {/* <h3>{cardData.title.toUpperCase()}</h3> */}
              <h4>
                <NotesIcon style={{ color: "#c33764" }} />
                {cardData.description}
              </h4>
              <ul>
                {cardData.extra && (
                  <li>
                    <DoubleArrowIcon style={{ color: "#c33764" }} />
                    {cardData.extra}
                  </li>
                )}
                {cardData.extra2 && (
                  <li>
                    <DoubleArrowIcon style={{ color: "#c33764" }} />
                    {cardData.extra2}
                  </li>
                )}

                {fieldsData.length > 0 &&
                  fieldsData.map((el) => (
                    <li key={el.id}>
                      <DoubleArrowIcon style={{ color: "#c33764" }} />
                      <span>{el.element}</span>
                    </li>
                  ))}
                {cardData.mytimestamp && (
                  <li>
                    <DoubleArrowIcon style={{ color: "#c33764" }} />
                    <span>Created At : {createdTime}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <Link to="/">Home</Link>
      </div>
    );
  }
};

export default DynamicPage;
