import React, { useEffect, useState, useContext } from "react";
import CardJob from "./CardJob";
import Pagination from "./Pagination";
import { JobsContext } from "../context/JobsContext";
import { SearchContext } from "../context/SearchContext";
import axios from "axios";
import { Link } from "react-router-dom";
import Load from "./Load";

const Main = () => {
  const { description, location, fullTime } = useContext(SearchContext);
  const allJobs = useContext(JobsContext);
  const [lengthPages, setLengthPages] = useState(0);
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
          setLengthPages(Math.ceil(length / 5));
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

  const nextPage = (pages, setPages, setCurrPage) => {
    const oldPage = document.querySelector(".current-page");

    window.scrollTo(0, document.querySelector(".Main").offsetTop);

    if (parseInt(oldPage.getAttribute("index")) < lengthPages) {
      SetCursor({
        start: cursor.start + 5,
        end: cursor.end + 5,
      });

      setCurrPage(parseInt(oldPage.getAttribute("index")) + 1);

      if (parseInt(oldPage.textContent) === lengthPages - 3) {
        const [p1, p2, p3] = pages;
        setPages([p1 + 1, p2 + 1, p3 + 1, p3 + 2]);

        oldPage.nextElementSibling.setAttribute("index", lengthPages - 1);
        oldPage.nextElementSibling.textContent = lengthPages - 1;
        setCurrPage(parseInt(lengthPages - 2));
      }

      if (oldPage.nextElementSibling.textContent === "...") {
        const [p1, p2, p3, dot] = pages;
        setPages([p1 + 1, p2 + 1, p3 + 1, dot]);
      }
    }
  };

  const prevPage = (pages, setPages, setCurrPage) => {
    const oldPage = document.querySelector(".current-page");

    window.scrollTo(0, document.querySelector(".Main").offsetTop);

    if (parseInt(oldPage.textContent) === lengthPages - 2) {
      oldPage.nextElementSibling.textContent = "...";
    }

    if (
      oldPage.previousElementSibling.classList.contains("prevPage") &&
      oldPage.textContent !== "1"
    ) {
      const [p1, p2, p3, dot] = pages;
      setPages([p1 - 1, p2 - 1, p3 - 1, dot]);

      setCurrPage(parseInt(oldPage.getAttribute("index")) - 1);

      SetCursor({
        start: cursor.start - 5,
        end: cursor.end - 5,
      });
    }

    if (oldPage.previousElementSibling.classList.contains("prevPage") === false) {
      setCurrPage(parseInt(oldPage.getAttribute("index")) - 1);
      setCurrPage(parseInt(oldPage.getAttribute("index")) - 1);

      SetCursor({
        start: cursor.start - 5,
        end: cursor.end - 5,
      });
    }
  };

  return (
    <main className="Main">
      {isLoad ? (
        <Load />
      ) : (
        allJobs.jobs.slice(cursor.start, cursor.end).map((job, index) => (
          <Link key={job.id} to={`/${job.index}`}>
            <CardJob index={job.index} {...job} />
          </Link>
        ))
      )}
      {lengthPages > 0 && (
        <Pagination
          length={lengthPages}
          prevPage={(pages, setPages, setCurrPage) => prevPage(pages, setPages, setCurrPage)}
          nextPage={(pages, setPages, setCurrPage) => nextPage(pages, setPages, setCurrPage)}
        />
      )}
    </main>
  );
};

export default Main;
