import React from "react";
import "./CustomButton.css";
const CustomButton = (props) => {
  return (
    <button
      type={props.type === "submit" ? "submit" : "button"}
      onClick={props.onClick}
      className={"custom-button " + props.buttonType}
    >
      {props.text}
    </button>
  );
};

export default CustomButton;
