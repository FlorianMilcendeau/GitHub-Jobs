import React, { useContext } from "react";
import "./Header.css";
import Input from "./Input";
import Button from "./Button";
import jobIcon from "../assets/icon/work.svg";
import { SearchContext } from "../context/SearchContext";

const Header = () => {
  const { setDescription } = useContext(SearchContext);
  return (
    <header className="Header">
      <Input
        offLive
        id="search-description"
        setField={(str) => setDescription(str)}
        icon={jobIcon}
        placeHolder="Title, companies, expertise or benefits"
      />
      <Button from="search-description" value="search" />
    </header>
  );
};

export default Header;
