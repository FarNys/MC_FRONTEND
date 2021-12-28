import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { changeWishState, changeWishPage } from "../features/cardSlice";
import "../styles/SingleCard.css";
import { Link } from "react-router-dom";
import { deleteItem } from "../features/cardSlice";
// import StarBorderIcon from "@material-ui/icons/StarBorder";
import EditIcon from "@material-ui/icons/Edit";
import CardModal from "./CardModal";
import CardModals from "./CardModals";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { baseURL } from "../App";
const SingleCard = ({ item }) => {
  const dispatch = useDispatch();
  const [isOpen, setisOpen] = useState(false);
  // const [cssWishList, setcssWishList] = useState(false);
  const onClose = () => {
    setisOpen(false);
  };
  const modalHandler = () => {
    setisOpen(true);
  };
  const [deleteEffect, setdeleteEffect] = useState(false);
  const deleteHandler = async (item) => {
    // setdeleteEffect(false);
    const res = await fetch(`${baseURL}/allcards/${item._id}`, {
      method: "DELETE",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    dispatch(
      deleteItem({
        deleteId: data._id,
      })
    );
    // console.log(data, item);
  };
  const wishHandler = async (item) => {
    const res = await fetch(`${baseURL}/allcards/${item._id}`, {
      method: "PATCH",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isWishList: item.isWishList }),
    });
    const data = await res.json();
    dispatch(
      changeWishState({
        elementId: item._id,
      })
    );
    dispatch(
      changeWishPage({
        elementId: item._id,
      })
    );
    // console.log(item._id);
  };

  return (
    <>
      <div
        className={
          deleteEffect ? "singlecard_container active" : "singlecard_container"
        }
      >
        {/* <div className="singlecard_title">{item.title}</div> */}
        <div className="singlecard_img">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="singlecard_desc">
          <p>{item.title}</p>
        </div>
        <div className="singlecard_bottom">
          <div className="wish_btn_container">
            <button className="wishlist_icon" onClick={() => wishHandler(item)}>
              <FavoriteIcon
                className={
                  item.isWishList ? "icon_yellow" : "icon_no_className"
                }
              />
            </button>

            <button onClick={() => deleteHandler(item)}>
              <DeleteIcon />
            </button>
            <Link to={`/allcards/${item._id}`}>
              <OpenInNewIcon />
            </Link>
            <button className="wishlist_icon" onClick={modalHandler}>
              <EditIcon />
            </button>
          </div>
        </div>
      </div>
      <CardModal isOpen={isOpen} onClose={onClose} />
      <CardModals
        className="cardmodal_form"
        item={item}
        isOpen={isOpen}
        onClose={onClose}
        setisOpen={setisOpen}
      />
    </>
  );
};

export default SingleCard;
