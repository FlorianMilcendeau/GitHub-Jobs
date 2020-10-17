import React from "react";
import { useParams } from "react-router-dom";
import { jobsContext } from "../context/JobsContext";
import arrowReturn from "../assets/icon/arrowReturn.svg";
import timeIcon from "../assets/icon/time.svg";
import "./Description.css";
import Tag from "../component/Tag";
import Time from "../component/Time";

const Description = () => {
  let { id } = useParams();
  return (
    <main className="Description">
      <a className="return-search" href="/">
        <img className="arrow-return" src={arrowReturn} alt="arrow return" /> Back to search
      </a>
      <h3 className="title-minor">How to apply</h3>
      <jobsContext.Consumer>
        {(Jobs) => (
          <>
            <p className="how-apply" dangerouslySetInnerHTML={{ __html: `${Jobs[id].apply}` }}></p>
            
            <h2>{Jobs[id].title}</h2>
            <Tag value={Jobs[id].type} />
            <Time value={Jobs[id].time} icon={timeIcon} />
            <img lazy="true" className="company-logo" src={Jobs[id].logo} alt="logo" />
            <section
              className="detail-job"
              dangerouslySetInnerHTML={{ __html: `${Jobs[id].description}` }}
            />
          </>
        )}
      </jobsContext.Consumer>
    </main>
  );
};

export default Description;
