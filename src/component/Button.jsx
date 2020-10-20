import React, { useContext } from "react";
import PropType from "prop-types";
import "./Button.css";
import { SearchContext } from "../context/SearchContext";

const Button = ({ value, from }) => {
  const { setDescription } = useContext(SearchContext);
  
  const submit = () => {
    setDescription(document.getElementById(from).value);
  };

  return (
    <button onClick={(e) => submit(e)} className="Button">
      {value}
    </button>
  );
};

export default Button;

Button.propType = {
  value: PropType.string.isRequired,
  from: PropType.string.isRequired,
};
