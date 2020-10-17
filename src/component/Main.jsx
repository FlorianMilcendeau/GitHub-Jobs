import React, { useEffect, useState } from "react";
import CardJob from "./CardJob";
import Pagination from "./Pagination";
import { allJobs } from "../context/JobsContext";
import axios from "axios";
import { Link } from "react-router-dom";

const Main = () => {
  const [jobs, setJobs] = useState([]);
  const [lengthPages, setLengthPages] = useState(0);
  const [cursor, SetCursor] = useState({ start: 0, end: 5 });

  useEffect(() => {
    axios
      .get("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1", {
        header: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        setLengthPages(res.data.length / 5);

        for (const job of res.data) {
          allJobs.push({
            title: job.title,
            logo: job.company_logo,
            company: job.company,
            location: job.location,
            description: job.description,
            apply: job.how_to_apply,
            type: job.type,
            time: job.created_at,
          });
        }

        setJobs(allJobs);
      })
      .catch((err) => console.log(err));
  }, []);

  const nextPage = (pages, setPages, setCurrPage) => {
    const oldPage = document.querySelector(".current-page");

    if (parseInt(oldPage.getAttribute("index")) < 10) {
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

    if (parseInt(oldPage.textContent) === lengthPages - 2) {
      oldPage.nextElementSibling.textContent = "...";
    }

    if (
      oldPage.previousElementSibling.classList.contains("prevPage") &&
      oldPage.textContent !== "1"
    ) {
      const [p1, p2, p3, dot] = pages;
      setPages([p1 - 1, p2 - 1, p3 - 1, dot]);
    }

    if (oldPage.previousElementSibling.classList.contains("prevPage") === false) {
      setCurrPage(parseInt(oldPage.getAttribute("index")) - 1);

      SetCursor({
        start: cursor.start - 5,
        end: cursor.end - 5,
      });
    }
  };

  return (
    <main className="Main">
      {jobs.slice(cursor.start, cursor.end).map((job, index) => (
        <Link to={`/${index}`} ><CardJob key={index} {...job} /></Link>
      ))}
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
