import React from "react";
import "../styles/SingleCard.css";
import { IoIdCardSharp } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { MdAccessTimeFilled } from "react-icons/md";

const States = () => {
  return (
    <div className="allcard_container_stats">
      <div className="stats_container">
        <div className="icon_state">
          <IoIdCardSharp />
        </div>
        <div className="icon_name">Total Cards:</div>
        <div className="info_state">3</div>
      </div>
      <div className="stats_container">
        <div className="icon_state">
          <AiFillHeart />
        </div>
        <div className="icon_name">WishList Cards:</div>
        <div className="info_state">3</div>
      </div>
      <div className="stats_container">
        <div className="icon_state">
          <MdAccessTimeFilled />{" "}
        </div>
        <div className="icon_name">LastCardCreatedAt:</div>

        <div className="info_state">3</div>
      </div>
    </div>
  );
};

export default States;
