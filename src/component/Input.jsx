import React from "react";
import "./Input.css";
import PropType from "prop-types";

const Input = ({ placeHolder, icon }) => {
  return (
    <div className="wrapper-input">
      <img className="icon" src={icon} alt="icon" />
      <input placeholder={placeHolder} type="search" className="Input" />
    </div>
  );
};

export default Input;

Input.propType = {
  placeHolder: PropType.string,
};
