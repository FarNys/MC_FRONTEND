import React, { useState } from "react";
import ReactDom from "react-dom";
import "../styles/CardModal.css";
import LoaderButton from "./LoaderButton";
import { filterForEdit, setCard } from "../features/cardSlice";
import { useDispatch } from "react-redux";
import { Fade } from "react-reveal";
import { baseURL } from "../App";
import Loader from "react-js-loader";
import ClearIcon from "@material-ui/icons/Clear";

const CardModals = ({ onClose, isOpen, item, setisOpen }) => {
  const [success, setsuccess] = useState(false);
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [cardData, setcardData] = useState({
    title: item.title,
    description: item.description,
    image: item.image,
    extra: item.extra,
    extra2: item.extra2,
    isWishList: item.isWishList,
  });
  const { title, description, image, extra, extra2, isWishList } = cardData;
  const onChange = (e) => {
    setcardData({ ...cardData, [e.target.name]: e.target.value });
  };
  const updateHandler = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const result = await fetch(`${baseURL}/allcards/edit/${item._id}`, {
        method: "PATCH",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: cardData.title,
          description: cardData.description,
          image: cardData.image,
          extra: cardData.extra,
          extra2: cardData.extra2,
          isWishList: item.isWishList,
        }),
      });
      const data = await result.json();
      dispatch(
        filterForEdit({
          editID: data._id,
          editedCard: data,
        })
      );
      console.log(data);

      setloading(false);
      setsuccess(true);
      setTimeout(() => {
        setsuccess(false);
        setisOpen(false);
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };
  if (!isOpen) return null;
  return ReactDom.createPortal(
    <>
      <div className="succes_container">
        {success && (
          <Fade top>
            <div className="alert_container_modal">
              <h4>Card has been edited</h4>
            </div>
          </Fade>
        )}
      </div>
      <form className="memory_card_container_edit" type="submit">
        <ClearIcon className="close_icon" onClick={() => setisOpen(false)} />
        <h1>Edit Your Card</h1>
        <div className="single_container">
          <label htmlFor="title">Title </label>
          <input type="text" name="title" onChange={onChange} value={title} />
        </div>{" "}
        <div className="single_container">
          <label htmlFor="description">description </label>
          <input
            type="text"
            name="description"
            onChange={onChange}
            value={description}
          />
        </div>{" "}
        <div className="single_container">
          <label htmlFor="image">Image </label>
          <input
            type="text"
            name="image"
            onChange={onChange}
            value={image}
            disabled
          />
        </div>{" "}
        <div className="single_container">
          <label htmlFor="extra">Extra</label>
          <input type="text" name="extra" value={extra} onChange={onChange} />
        </div>{" "}
        <div className="single_container">
          <label htmlFor="extra2">Extra2</label>
          <input type="text" name="extra2" value={extra2} onChange={onChange} />
        </div>
        {loading ? (
          <div className="loader_container">
            <Loader
              type="bubble-loop"
              bgColor={"#c33764"}
              color={"#c33764"}
              size={50}
            />
          </div>
        ) : (
          <button className="save_btn" onClick={updateHandler} type="submit">
            Update Card
          </button>
        )}
      </form>
    </>,
    document.getElementById("updateCardPortals")
  );
};

export default CardModals;
