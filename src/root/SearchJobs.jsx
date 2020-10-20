import React from "react";
import Header from "../component/Header";
import Main from "../component/Main";
import SideBar from "../component/SideBar";

const SearchJobs = () => {
  return (
    <>
      <Header />
      <div className="container-flex">
        <SideBar />
        <Main />
      </div>
    </>
  );
};

export default SearchJobs;
