import React, { useState } from "react";
import "../styles/Create.css";
import Fade from "react-reveal/Fade";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import FileBase64 from "react-file-base64";
import Loader from "react-js-loader";
import { baseURL } from "../App";
const Create = () => {
  const [loading, setloading] = useState(false);
  const [alert, setalert] = useState(false);
  const [imageAlert, setimageAlert] = useState(false);
  const [success, setsuccess] = useState(false);
  const [arrNum, setarrNum] = useState([]);
  const [addInput, setaddInput] = useState({});

  //CREATE RANDOM NUMBER FOR NEW FIELDS NAME
  const randomNumber = () => {
    return Math.floor(Math.random() * 100000);
  };
  //BARE CARD
  const [cardData, setcardData] = useState({
    title: "",
    description: "",
    image: "",
    extra: "",
    extra2: "",
    fields: [],
    isWishList: false,
  });
  //FUNCTION FOR ADD MORE DATA
  const addHandler = (e) => {
    e.preventDefault();
    setarrNum([...arrNum, randomNumber()]);
    console.log(arrNum);
  };
  //CURRENT CHANGES ON INPUTS
  const addChange = (e) => {
    setaddInput({ ...addInput, [e.target.name]: e.target.value.trim() });

    console.log(addInput);
  };
  //REMOVE ALL CREATED EXTRA FIELDS
  const removeFieldHandler = (e) => {
    e.preventDefault();
    setarrNum([]);
    setaddInput({});
  };

  //FUNCTION FOR ADD MORE DATA
  const { title, description, image, extra, extra2, isWishList } = cardData;
  const onChange = (e) => {
    setcardData({ ...cardData, [e.target.name]: e.target.value });
  };
  //SEND DATA TO BACKEND(CREATE CARD)
  const saveHandler = async (e) => {
    e.preventDefault();
    if (title === "" || description === "" || image === "") {
      setalert(true);
      setTimeout(() => {
        setalert(false);
      }, 2000);
    }
    console.log(cardData);
    if (cardData.title && cardData.description && cardData.image) {
      setloading(true);
      //ADDED NEW PROPERTIES TO OUR CARDS
      setcardData(cardData.fields.push(addInput));
      try {
        const result = await fetch(`${baseURL}/allcards`, {
          method: "POST",
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
            fields: cardData.fields,
            isWishList: false,
          }),
        });

        const data = await result.json();
        if (data) {
          setsuccess(true);
          setTimeout(() => {
            setsuccess(false);
          }, 2000);
        }
        setcardData({
          title: "",
          description: "",
          image: "",
          extra: "",
          extra2: "",
          fields: [],
        });
        //ADDED FOR EXTRA FIELDS
        setarrNum([]);
        setaddInput({});
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };
  //CHECK SIZE OF IMAGE AND ADD IT TO CARD OBJECT
  const imageHandler = (e) => {
    const v = e.size.split("");
    const t = +v.slice(0, v.length - 3).join("");
    if (t < 150) {
      setcardData({ ...cardData, image: e.base64 });
    } else {
      setimageAlert(true);
      setTimeout(() => {
        setimageAlert(false);
      }, 3000);
    }
  };

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
    <div className="create_card_container">
      {alert && (
        <Fade top>
          <div className="alert_container fail">
            <h4>Fill required fields</h4>
          </div>
        </Fade>
      )}
      {success && (
        <Fade top>
          <div className="alert_container succes">
            <h4>Card has been created</h4>
          </div>
        </Fade>
      )}
      {imageAlert && (
        <Fade top>
          <div className="alert_container fail">
            <h4>Reduce image size to below 150kB</h4>
          </div>
        </Fade>
      )}
      <form className="memory_card_container" type="submit">
        <h1>Create Your Card</h1>
        <div className="single_container">
          <label htmlFor="title">
            Title{" "}
            <span>
              <ErrorOutlineIcon className="icon_error" />
            </span>
          </label>
          <input
            type="text"
            name="title"
            onChange={onChange}
            required
            value={title}
          />
        </div>{" "}
        <div className="single_container">
          <label htmlFor="description">
            description{" "}
            <span>
              <ErrorOutlineIcon className="icon_error" />
            </span>
          </label>
          <input
            type="text"
            name="description"
            onChange={onChange}
            required
            value={description}
          />
        </div>{" "}
        <div className="single_container">
          <label htmlFor="image">
            Image ( 150kB > ) <ErrorOutlineIcon className="icon_error" />
            {/* <input type="text" name="image" value={cardData.image} required /> */}
          </label>
          <span>
            <FileBase64
              type="file"
              multiple={false}
              // onDone={({ base64 }) =>
              //   setcardData({ ...cardData, image: base64 })
              // }
              value={cardData.image}
              onDone={imageHandler}
            />
          </span>
        </div>{" "}
        <div className="single_container">
          <label htmlFor="extra">Extra</label>
          <input type="text" name="extra" value={extra} onChange={onChange} />
        </div>{" "}
        <div className="single_container">
          <label htmlFor="extra2">Extra2</label>
          <input type="text" name="extra2" value={extra2} onChange={onChange} />
        </div>
        {arrNum.length > 0 &&
          arrNum.map((el) => (
            <div className="single_container" key={el}>
              <input type="text" name={el} onChange={addChange} data-num={el} />
            </div>
          ))}
        <button onClick={addHandler}>Add Field</button>
        {arrNum.length > 0 && (
          <button onClick={removeFieldHandler}>Remove all fields</button>
        )}
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
          <button className="save_btn" onClick={saveHandler} type="submit">
            Create
          </button>
        )}
      </form>
    </div>
  );
};

export default Create;
