import React, { useState, useRef, useEffect } from "react";
import "../styles/Review.css";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";

const Review = () => {
  //   const [count, setcount] = useState(0);
  let count = 0;
  const reviewRef = useRef(null);
  const nextBtn = useRef(null);
  const prevBtn = useRef(null);
  let btnCSS = true;
  console.log(btnCSS);
  // USE USEEFFECT FOR AUTO PLAY CAROUSEL COUNT++ SHOULD BE FIRST!
  // useEffect(() => {
  //   setInterval(() => {
  //     count++;
  //     reviewRef.current.style.transform = `translateX(${count * -250}px)`;
  //     reviewRef.current.style.transition = "transform 0.3s ease";
  //   }, 4000);
  // }, [count]);

  const [reviewData, setreviewData] = useState([
    {
      name: "Eddie",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minus odit molestias, ex saepe",
      imageURL: "./images/person_1.jpg",
    },
    {
      name: "Jackson",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minus odit molestias, ex saepe",
      imageURL: "./images/person_2.jpg",
    },
    {
      name: "Alfred",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minus odit molestias, ex saepe sdgsdgsdgst el;kjoplf ahjsoka lkajlskaj a jaajda a;ldjal;dja w4-i0 3i5k lkhjakdj lkhjlk hdlk alkndlka",
      imageURL: "./images/person_3.jpg",
    },
    {
      name: "Louis",
      text: "Lorem ipsum dodipisicing elit. Modi minus odit molestias, ex saepe",
      imageURL: "./images/person_5.jpg",
    },
  ]);
  //CAROUSEL WITH UNLIMITED NEXT AND PREVIOUS
  const transitionHandler = () => {
    if (count === -1) {
      reviewRef.current.style.transition = "none";
      count = reviewData.length - 1;
      reviewRef.current.style.transform = `translateX(${count * -250}px)`;
    }
    if (count === reviewData.length) {
      reviewRef.current.style.transition = "none";
      count = 0;
      reviewRef.current.style.transform = `translateX(${count * -250}px)`;
    }
  };
  //NEXT DATA HANDLER
  const nextHandler = async (e) => {
    nextBtn.current.style.pointerEvents = "none";
    setTimeout(() => {
      nextBtn.current.style.pointerEvents = "visible";
    }, 300);
    e.preventDefault();
    reviewRef.current.style.transition = "transform 0.3s ease";
    count++;
    reviewRef.current.style.transform = `translateX(${count * -250}px)`;
  };
  //PREV DATA HANDLER
  const prevHandler = (e) => {
    prevBtn.current.style.pointerEvents = "none";
    setTimeout(() => {
      prevBtn.current.style.pointerEvents = "visible";
    }, 300);
    e.preventDefault();
    reviewRef.current.style.transition = "transform 0.3s ease";
    count--;
    reviewRef.current.style.transform = `translateX(${count * -250}px)`;
  };

  return (
    <div className="review_container">
      <h3>Review</h3>
      <div className="review_parent">
        <div
          className={"review_box active"}
          ref={reviewRef}
          onTransitionEnd={transitionHandler}
        >
          {/* Last data placed in first */}
          <div className="single_review_container">
            <div className="review_socialmedia">
              <div className="socialmedia_icon_whatssapp">
                <WhatsAppIcon />
              </div>
              <div className="socialmedia_icon_twitter">
                <TwitterIcon />
              </div>
            </div>
            <div className="review_top">
              <img
                className="review_images"
                src={reviewData[reviewData.length - 2].imageURL}
                alt=""
              />
            </div>
            <div className="review_bottom">
              <h3>{reviewData[reviewData.length - 2].name}</h3>
              <p>{reviewData[reviewData.length - 2].text}</p>
            </div>
          </div>
          <div className="single_review_container">
            <div className="review_socialmedia">
              <div className="socialmedia_icon_whatssapp">
                <WhatsAppIcon />
              </div>
              <div className="socialmedia_icon_twitter">
                <TwitterIcon />
              </div>
            </div>
            <div className="review_top">
              <img
                className="review_images"
                src={reviewData[reviewData.length - 1].imageURL}
                alt=""
              />
            </div>
            <div className="review_bottom">
              <h3>{reviewData[reviewData.length - 1].name}</h3>
              <p>{reviewData[reviewData.length - 1].text}</p>
            </div>
          </div>
          {reviewData.map((item, id) => (
            <div className="single_review_container">
              <div className="review_socialmedia">
                <div className="socialmedia_icon_whatssapp">
                  <WhatsAppIcon />
                </div>
                <div className="socialmedia_icon_twitter">
                  <TwitterIcon />
                </div>
              </div>
              <div className="review_top">
                <img className="review_images" src={item.imageURL} alt="" />
              </div>
              <div className="review_bottom">
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
          {/* FIRST ITEM PLACED IN LAST */}
          <div className="single_review_container">
            <div className="review_socialmedia">
              <div className="socialmedia_icon_whatssapp">
                <WhatsAppIcon />
              </div>
              <div className="socialmedia_icon_twitter">
                <TwitterIcon />
              </div>
            </div>
            <div className="review_top">
              <img
                className="review_images"
                src={reviewData[0].imageURL}
                alt=""
              />
            </div>
            <div className="review_bottom">
              <h3>{reviewData[0].name}</h3>
              <p>{reviewData[0].text}</p>
            </div>
          </div>
          <div className="single_review_container">
            <div className="review_socialmedia">
              <div className="socialmedia_icon_whatssapp">
                <WhatsAppIcon />
              </div>
              <div className="socialmedia_icon_twitter">
                <TwitterIcon />
              </div>
            </div>
            <div className="review_top">
              <img
                className="review_images"
                src={reviewData[1].imageURL}
                alt=""
              />
            </div>
            <div className="review_bottom">
              <h3>{reviewData[1].name}</h3>
              <p>{reviewData[1].text}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="review_button_container">
        <div className={btnCSS ? "btn_box" : "btn_box deactive"}>
          <button onClick={nextHandler} ref={nextBtn}>
            <NavigateNextIcon className="btn_font" />
          </button>
        </div>
        <div className={btnCSS ? "btn_box" : "btn_box deactive"}>
          <button onClick={prevHandler} ref={prevBtn}>
            <NavigateBeforeIcon className="btn_font" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
