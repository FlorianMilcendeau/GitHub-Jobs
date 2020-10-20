import React from "react";
import "./Checkbox.css";
import PropType from "prop-types";
import { SearchContext } from "../context/SearchContext";
import { useContext } from "react";

const Checkbox = ({ id, value, setChecked, getBool }) => {
  const { location, fullTime } = useContext(SearchContext);

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setChecked(getBool ? true : id);
    } else {
      setChecked("");
    }
  };

  return (
    <div className="wrapper-checkbox">
      {
        <input
          className="checkbox"
          id={id}
          name={id}
          type="checkbox"
          checked={location === id || fullTime === getBool ? true : false}
          onChange={(e) => handleCheckbox(e)}
        />
      }
      <label className="label-checkbox" htmlFor={id}>
        {value}
      </label>
    </div>
  );
};

export default Checkbox;

Checkbox.propType = {
  id: PropType.string.isRequired,
  value: PropType.string.isRequired,
  setChecked: PropType.func,
};
