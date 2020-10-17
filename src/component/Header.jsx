import React from "react";
import "./Header.css";
import Input from "./Input";
import Button from "./Button";
import jobIcon from "../assets/icon/work.svg";

const Header = () => {
  return (
    <header className="Header">
      <Input icon={jobIcon} placeHolder="Title, companies, expertise or benefits" />
      <Button value="search" />
    </header>
  );
};

export default Header;
