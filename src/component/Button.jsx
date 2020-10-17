import React from 'react';
import PropType from "prop-types";
import "./Button.css";

 const Button = ({value}) => {
     return (
     <button className="Button">{value}</button>
     )
 }

export default Button;

Button.propType = {
    value: PropType.string.isRequired
}