import React, { useState, useEffect } from "react";
import "./Input.css";
import PropType from "prop-types";

const Input = ({ id, placeHolder, icon, setField, offLive }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (offLive !== true) {
      if (typeof setField == "function") {
        setField(value);
      }
    }
  }, [value]);

  const handleInput = async (e) => {
    await setValue(e.target.value);
  };

  return (
    <div className="wrapper-input">
      <img className="icon" src={icon} alt="icon" />
      <input
        id={id}
        onChange={(e) => handleInput(e)}
        placeholder={placeHolder}
        type="search"
        className="Input"
        onKeyPress={(e) => e.which === 13 && setField(value)}
      />
    </div>
  );
};

export default Input;

Input.propType = {
  id: PropType.string,
  placeHolder: PropType.string,
  setField: PropType.func,
};
