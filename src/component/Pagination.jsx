import React, { useEffect, useState } from "react";
import previousArrow from "../assets/icon/previousArrow.svg";
import nextArrow from "../assets/icon/nextArrow.svg";
import "./Pagination.css";
import PropTypes from "prop-types";

const Pagination = ({ length, nextPage, prevPage }) => {
  const [totalPages, setTotalPages] = useState([]);
  const [currPage, setCurrPage] = useState(1);

  //Initialize
  useEffect(() => {
    const array = [];
    const maxLength = length > 4 ? 4 : length;

    setCurrPage(1);
    for (let i = 0; i < maxLength; i++) {
      if (i === 3) {
        array.push("...");
      } else {
        array.push(i + 1);
      }
    }

    setTotalPages(array);
  }, [length]);

  return (
    <ul className="Pagination">
      <li className="prevPage" onClick={() => prevPage(totalPages, setTotalPages, setCurrPage)}>
        <img className="arrow" src={previousArrow} alt="previous arrow icon" />
      </li>
      {totalPages.map((page) => (
        <li className={`pagination ${page === currPage && "current-page"}`} index={page} key={page}>
          {page}
        </li>
      ))}
      {length > 5 && (
        <li index={length} className={`pagination ${length === currPage && "current-page"}`}>
          {length}
        </li>
      )}
      <li className="nextPage" onClick={() => nextPage(totalPages, setTotalPages, setCurrPage)}>
        <img className="arrow" src={nextArrow} alt="next arrow icon" />
      </li>
    </ul>
  );
};

export default Pagination;

Pagination.propTypes = {
  length: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
};
