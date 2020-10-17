import React from "react";
import "./Tag.css";
import PropTypes from "prop-types";

const Tag = ({ value }) => <div className="Tag">{value}</div>;

export default Tag;

Tag.propTypes = {
  value: PropTypes.string.isRequired,
};
