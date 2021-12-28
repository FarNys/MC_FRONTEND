import React, { useState, useEffect } from "react";
import { selectWishCard, setCard } from "../features/cardSlice";
import { useSelector, useDispatch } from "react-redux";
import SingleCard from "../components/SingleCard";
import "../styles/SingleCard.css";
import Loader from "react-js-loader";
import { baseURL } from "../App";
const Wishlist = () => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const wishCards = useSelector(selectWishCard);

  useEffect(() => {
    setloading(true);
    const fetchData = async () => {
      const result = await fetch(`${baseURL}/allcards`, {
        method: "GET",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      const data = await result.json();

      dispatch(
        setCard({
          cards: data,
        })
      );
      setloading(false);

      // console.log(data);
      // console.log(65);
    };
    fetchData();
  }, [dispatch]);

  // const dispatch = useDispatch();

  // if (loading)
  //   return (
  //     <Loader
  //       type="bubble-loop"
  //       bgColor={"#c33764"}
  //       color={"#c33764"}
  //       size={50}
  //     />
  //   );
  return (
    <div className="allcard_container">
      {loading ? (
        <Loader
          type="bubble-loop"
          bgColor={"#c33764"}
          color={"#c33764"}
          size={50}
        />
      ) : (
        <div className="allcard_container_inner">
          {wishCards.length > 0 ? (
            wishCards.map((item) => {
              return <SingleCard item={item} key={item._id} />;
            })
          ) : (
            <ul>
              <li>
                <h3>No Wish Card</h3>
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
