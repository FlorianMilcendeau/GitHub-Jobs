import React from "react";
import Tag from "./Tag";
import "./CardJob.css";
import PropTypes from "prop-types";
import timeIcon from "../assets/icon/time.svg";
import earthIcon from "../assets/icon/earth.svg";
import InfoPost from "./InfoPost";
import Picture from "./Picture";

const CardJob = ({ index, logo, company, title, location, time, type }) => {
  return (
    <section index={index} className="CardJob">
      <Picture className="company-logo" src={logo} alt="logo" />
      <section className="info-company">
        <h4 className="company-name">{company}</h4>
        <p>{title}</p>
        <Tag value={type} />
        <footer className="footer-card">
          <ul>
            <li className="location">
              <InfoPost value={location} icon={earthIcon} />
            </li>
            <li className="time-post">
              <InfoPost value={time} icon={timeIcon} />
            </li>
          </ul>
        </footer>
      </section>
    </section>
  );
};

export default CardJob;

CardJob.propTypes = {
  index: PropTypes.number,
  logo: PropTypes.string,
  company: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  fulltime: PropTypes.string,
  time: PropTypes.string,
};
