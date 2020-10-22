import React, { useEffect, useState, useContext } from "react";
import CardJob from "./CardJob";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { JobsContext } from "../context/JobsContext";
import { SearchContext } from "../context/SearchContext";
import axios from "axios";
import { Link } from "react-router-dom";
import Load from "./Load";

const Main = () => {
  const { description, location, fullTime } = useContext(SearchContext);
  const allJobs = useContext(JobsContext);
  const [lengthPages, setLengthPages] = useState(0);
  const [currentPages, setCurrentPage] = useState(1);
  const [cursor, SetCursor] = useState({ start: 0, end: 5 });
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setIsLoad(true);
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}&full_time=${fullTime}`,
        {
          header: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        const length = res.data.length;

        if (length > 5) {
          setLengthPages(Math.ceil(length));
        } else {
          setLengthPages(0);
        }
        let i = 0,
          array = [];

        for (const job of res.data) {
          array.push({
            id: job.id,
            index: i,
            title: job.title,
            logo: job.company_logo,
            company: job.company,
            location: job.location,
            description: job.description,
            apply: job.how_to_apply,
            type: job.type,
            time: job.created_at,
          });

          i++;
        }

        allJobs.setJobs(array);
        SetCursor({ start: 0, end: length > 5 ? 5 : length });
        setIsLoad(false);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [description, location, fullTime]);

  const onChange = (page, sizePages) => {
    setCurrentPage(page);
    SetCursor({ start: (page - 1) * sizePages, end: page * sizePages });
    window.scrollTo(0, document.querySelector(".Main").offsetTop);
  };

  return (
    <main className="Main">
      {isLoad ? (
        <Load />
      ) : (
        allJobs.jobs.length ?
        allJobs.jobs.slice(cursor.start, cursor.end).map((job, index) => (
          <Link key={job.id} to={`/${job.index}`}>
            <CardJob index={job.index} {...job} />
          </Link>
        )) : <p className="none-job">no job offers here</p>
      )}
      {lengthPages > 0 && (
        <Pagination showSizeChanger={true} style={{marginTop: "2rem"}} onChange={onChange} pageSize={5} current={currentPages} total={lengthPages} />
      )}
    </main>
  );
};

export default Main;
