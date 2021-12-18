import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllReviews, selectReviews } from "../features/reviewsSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/ReceiveReview.css";
import { baseURL } from "../App";
import Slider from "react-slick";

const ReceiveReview = () => {
  const dispatch = useDispatch();
  const receiveReviews = useSelector(selectReviews);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const result = await fetch(`${baseURL}/reviews`);
        const data = await result.json();
        console.log(data);
        dispatch(
          getAllReviews({
            reviewsData: data,
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    console.log(receiveReviews);
    getReviews();
  }, [dispatch]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="receivieReview_container">
      <h1>Most Recent Reviews</h1>
      <div className="receive_items">
        <Slider {...settings}>
          {receiveReviews.length > 0 &&
            receiveReviews
              .splice(receiveReviews.length - 15, receiveReviews.length)
              .map((el) => (
                <div
                  className="carousel_item"
                  key={el._id}
                  style={{ width: 400 }}
                >
                  <div className="review_icon_info">
                    <div className="review_icon_container">
                      {el && el.order === "male" ? (
                        <img
                          src="./images/man.png"
                          alt="manReview"
                          className="reviews_icons"
                        />
                      ) : (
                        <img
                          src="./images/woman.png"
                          alt="womanReview"
                          className="reviews_icons"
                        />
                      )}
                    </div>
                    <div className="review_info_container">
                      <h4>
                        {el.name} ({el.job})
                      </h4>
                      <span>{el.mail}</span>
                    </div>
                  </div>
                  <div className="review_desc_time">
                    <p>{el.desc}</p>
                    <span>{new Date(el.timeStamp).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReceiveReview;
