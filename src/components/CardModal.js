import React from "react";
import ReactDom from "react-dom";
import "../styles/CardModal.css";
const CardModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDom.createPortal(
    <div className="cardmodal_container" onClick={onClose}></div>,
    document.getElementById("updateCardPortal")
  );
};

export default CardModal;
