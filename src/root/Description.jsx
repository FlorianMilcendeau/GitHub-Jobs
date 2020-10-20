import React, { useContext, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import { JobsContext } from "../context/JobsContext";
import arrowReturn from "../assets/icon/arrowReturn.svg";
import earthIcon from "../assets/icon/earth.svg";
import timeIcon from "../assets/icon/time.svg";
import "./Description.css";
import Tag from "../component/Tag";
import InfoPost from "../component/InfoPost";
import Picture from "../component/Picture";
import { Link } from "react-router-dom";

const Description = () => {
  const { jobs } = useContext(JobsContext);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="Description">
      <Link className="return-search" to="/">
        <img className="arrow-return" src={arrowReturn} alt="arrow return" /> Back to search
      </Link>
      <h3 className="title-minor">How to apply</h3>
      {jobs[id] ? (
        <>
          <p className="how-apply" dangerouslySetInnerHTML={{ __html: `${jobs[id].apply}` }}></p>
          <h2>{jobs[id].title}</h2>
          <Tag value={jobs[id].type} />
          <InfoPost value={jobs[id].time} icon={timeIcon} />
          <div className="banner-company">
            <Picture className="company-logo" src={jobs[id].logo} alt="logo" />
            <div>
              <h2>{jobs[id].company}</h2>
              <InfoPost value={jobs[id].location} icon={earthIcon} />
            </div>
          </div>
          <section
            className="detail-job"
            dangerouslySetInnerHTML={{ __html: `${jobs[id].description}` }}
          />
        </>
      ) : (
        <Redirect to="/" />
      )}
    </main>
  );
};

export default Description;
