import React from "react";
import ReactDom from "react-dom";
import "./Modal.css";

const Modal = (props) => {
  if (!props.open) return null;
  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal">{props.children}</div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
