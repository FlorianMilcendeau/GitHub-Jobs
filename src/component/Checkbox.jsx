import React from 'react'
import './Checkbox.css'
import PropType from "prop-types";

const Checkbox = ({id, value}) => {
    return (
        <div className="wrapper-checkbox">
            <input className="checkbox" id={id} name={id} type="checkbox"/> 
            <label className="label-checkbox" htmlFor={id}>{value}</label>
        </div>
    )
}

export default Checkbox;

Checkbox.propType = {
    id: PropType.string.isRequired,
    value: PropType.string.isRequired
}