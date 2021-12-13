import React, { useState } from "react";
import "../styles/SendReview.css";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { addReview, selectReviews } from "../features/reviewsSlice";
import { useDispatch, useSelector } from "react-redux";
import { baseURL } from "../App";
const SendReview = () => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const reviewsSelect = useSelector(selectReviews);
  console.log(reviewsSelect);
  const [failAlert, setfailAlert] = useState({
    failState: false,
    failMsg: "Review with this email already exists",
  });
  const [successAlert, setsuccessAlert] = useState({
    successState: false,
    successMsg: "Your review has been saved successfully",
  });
  const [reviews, setreviews] = useState({
    name: "",
    job: "",
    mail: "",
    desc: "",
    order: "male",
  });
  const reviewHandler = (e) => {
    setreviews({
      ...reviews,
      [e.target.name]: e.target.value,
    });
    console.log(reviews.desc.length);
  };
  console.log(reviews);

  const sendReviewHandler = async (e) => {
    e.preventDefault();
    try {
      if (
        reviews.name !== "" &&
        reviews.job !== "" &&
        reviews.mail !== "" &&
        reviews.desc !== ""
      ) {
        setloading(true);
        const res = await fetch(`${baseURL}/reviews`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            review: reviews,
          }),
        });
        const data = await res.json();
        console.log(data.review);
        dispatch(addReview({ newReview: data.review }));
        if (data.review) {
          setsuccessAlert({ ...successAlert, successState: true });
          reviews.name = "";
          reviews.job = "";
          reviews.mail = "";
          reviews.desc = "";
          setTimeout(() => {
            setsuccessAlert({ ...successAlert, successState: false });
            console.log(successAlert);
            setloading(false);
          }, 3000);
        }
        if (data.msg) {
          setfailAlert({ ...failAlert, failState: true });
          console.log(failAlert);
          setTimeout(() => {
            setfailAlert({ ...failAlert, failState: false });
            console.log(failAlert);
            setloading(false);
          }, 3000);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="send_review_container">
      <div className="feedback_container">
        <h1>Send Your Feedback</h1>
      </div>
      <form type="submit" className="send_review_form">
        <div className="send_review_top">
          <div className="send_review_input">
            {" "}
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={reviewHandler}
              value={reviews.name}
              required
            />
          </div>
          <div className="send_review_input">
            {" "}
            <label htmlFor="job">Job</label>
            <input
              type="text"
              name="job"
              placeholder="Job"
              onChange={reviewHandler}
              value={reviews.job}
              required
            />
          </div>
          <div className="send_review_input">
            {" "}
            <label htmlFor="email">Mail</label>
            <input
              type="email"
              name="mail"
              placeholder="Email"
              value={reviews.mail}
              onChange={reviewHandler}
              required
            />
          </div>
        </div>
        <div className="send_review_bot">
          <div className="send_review_input">
            <label htmlFor="desc">Description</label>
            <textarea
              name="desc"
              cols="30"
              rows="10"
              placeholder="Type here"
              maxlength="150"
              onChange={reviewHandler}
              value={reviews.desc}
              required
            ></textarea>
            <div className="text_remaining">
              Character Remaining : {150 - reviews.desc.length}
            </div>
          </div>
        </div>
        <div className="male_femail_container">
          <h4>Gender : </h4>
          <select name="order" onChange={reviewHandler}>
            {/* <option value="none">none</option> */}
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="send_btn_container">
          {" "}
          <button
            className={loading ? "send_btn alert" : "send_btn"}
            onClick={sendReviewHandler}
          >
            {loading ? "Wait . . ." : "Send"}
          </button>
        </div>
      </form>
      <div
        className={
          failAlert.failState
            ? "alert_review_container fail_alert"
            : "alert_review_container"
        }
      >
        {failAlert.failState && (
          <p>
            <PriorityHighIcon
              className="icon_fail_pass"
              style={{ color: "white" }}
            />{" "}
            {failAlert.failMsg}
          </p>
        )}
      </div>

      <div
        className={
          successAlert.successState
            ? "alert_review_container success_alert"
            : "alert_review_container"
        }
      >
        {successAlert.successState && (
          <p>
            <CheckCircleOutlineIcon
              className="icon_fail_pass"
              style={{ color: "white" }}
            />{" "}
            {successAlert.successMsg}
          </p>
        )}
      </div>
    </div>
  );
};

export default SendReview;
