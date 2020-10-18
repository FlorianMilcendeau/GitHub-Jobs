import React from "react";
import * as dayjs from "dayjs";
import * as RelativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/en";
import PropTypes from "prop-types";
import "./InfoPost.css";

dayjs.extend(RelativeTime);
dayjs.locale("en");

const InfoPost = ({ value, icon }) => {
  let day = dayjs();

  return (
    <div className="info-post">
      <img src={icon} alt="icon" />
      {Date.parse(value) ? day.to(value) : value}
    </div>
  );
};

export default InfoPost;

InfoPost.propTypes = {
  value: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
