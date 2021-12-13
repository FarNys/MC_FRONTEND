import React, { useEffect, useState } from "react";
import "../styles/SingleCard.css";
import { IoIdCardSharp } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { MdAccessTimeFilled } from "react-icons/md";
import { selectCard, selectWishCard } from "../features/cardSlice";
import { useSelector } from "react-redux";
const States = () => {
  const [createdTime, setcreatedTime] = useState(null);
  const countAllCards = useSelector(selectCard);
  const countAllWish = useSelector(selectWishCard);
  useEffect(() => {
    if (countAllCards.length > 0) {
      const timerElement = new Date(
        countAllCards[countAllCards.length - 1].mytimestamp
      );
      let formatted_date =
        timerElement.getFullYear() +
        "-" +
        (timerElement.getMonth() + 1) +
        "-" +
        timerElement.getDate() +
        " " +
        timerElement.getHours() +
        ":" +
        timerElement.getMinutes() +
        ":" +
        timerElement.getSeconds();
      setcreatedTime(formatted_date);
    }
  }, []);
  return (
    <div className="allcard_container_stats">
      <div className="stats_container">
        <div className="icon_state">
          <IoIdCardSharp />
        </div>
        <div className="icon_name">Total Cards:</div>
        <div className="info_state">{countAllCards.length}</div>
      </div>
      <div className="stats_container">
        <div className="icon_state">
          <AiFillHeart />
        </div>
        <div className="icon_name">Favorite Cards</div>
        <div className="info_state">{countAllWish.length}</div>
      </div>
      <div className="stats_container">
        <div className="icon_state">
          <MdAccessTimeFilled />{" "}
        </div>
        <div className="icon_name">LastCardCreatedAt:</div>
        <div className="info_state">{createdTime}</div>
      </div>
    </div>
  );
};

export default States;
