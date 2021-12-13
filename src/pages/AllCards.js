import React, { useState, useEffect } from "react";
import { setCard, selectCard } from "../features/cardSlice";
import { useSelector, useDispatch } from "react-redux";
import SingleCard from "../components/SingleCard";
import "../styles/SingleCard.css";

import Loader from "react-js-loader";
import States from "../components/States";
import Blobs from "../components/Blobs";
import { baseURL } from "../App";
const AllCards = () => {
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const myCards = useSelector(selectCard);

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

      console.log(data);
      console.log(65);
    };
    fetchData();
  }, [dispatch]);
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
        <>
          <States />
          <Blobs blobClass={"blobs_one"} />
          <Blobs blobClass={"blobs_two"} />
          <div className="allcard_container_inner">
            {myCards.length > 0 ? (
              myCards.map((item) => {
                return <SingleCard item={item} key={item._id} />;
              })
            ) : (
              <ul>
                <li>
                  {" "}
                  <h3>No Card yet!</h3>
                </li>
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AllCards;
