import React, { useState } from "react";
import "../styles/Create.css";
import StarIcon from "@material-ui/icons/Star";
const FormComp = ({
  text,
  need,
  settitle,
  setdescription,
  setimage,
  setextra,
  setextra2,
  setcardData,
  cardData,
  span,
}) => {
  const [currentFormInput, setcurrentFormInput] = useState();
  if (text === "title") {
    setcardData({ ...cardData, title: currentFormInput });
  }
  if (text === "description") {
    setcardData({ ...cardData, description: currentFormInput });
  }
  if (text === "image") {
    setcardData({ ...cardData, image: currentFormInput });
  }
  if (text === "extra") {
    setcardData({ ...cardData, extra: currentFormInput });
  }
  if (text === "extra2") {
    setcardData({ ...cardData, extra2: currentFormInput });
  }
  return (
    <div className="single_container">
      <label htmlFor={text}>
        {text}
        {need && (
          <span>
            <StarIcon />
          </span>
        )}
      </label>
      <input
        type="text"
        name={text}
        placeholde={`type some ${text}`}
        onChange={(e) => setcurrentFormInput(e.target.value)}
        value={currentFormInput}
      />
      <span className="span_error">{span}</span>
    </div>
  );
};

export default FormComp;
