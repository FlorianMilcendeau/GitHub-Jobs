import React from "react";
import Tag from "./Tag";
import "./CardJob.css";
import PropTypes from "prop-types";
import timeIcon from "../assets/icon/time.svg";
import earthIcon from "../assets/icon/earth.svg";
import Time from "./Time";

const CardJob = ({ key, logo, company, title, location, time, type }) => {
  return (
    <section index={key} className="CardJob">
      <img lazy="true" className="company-logo" src={logo} alt="logo" />
      <section className="info-company">
        <h4 className="company-name">{company}</h4>
        <p>{title}</p>
        <Tag value={type} />
        <footer className="footer-card">
          <ul>
            <li className="location">
              <img src={earthIcon} alt="icon" />
              {location}
            </li>
            <li className="time-post">
              <Time value={time} icon={timeIcon} />
            </li>
          </ul>
        </footer>
      </section>
    </section>
  );
};

export default CardJob;

CardJob.propTypes = {
  key: PropTypes.string,
  logo: PropTypes.string,
  company: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  fulltime: PropTypes.string,
  time: PropTypes.string,
};
