import React from "react";
import Checkbox from "./Checkbox";
import Input from "./Input";
import earthIcon from "../assets/icon/earth.svg";
import "./SideBar.css";

const SideBar = () => {
  return (
    <aside className="SideBar">
      <Checkbox id="fullTime" value="Full Time" />
      <h3 className="title-minor">Location</h3>
      <Input icon={earthIcon} placeHolder="City, state, zip code or country" />
      <Checkbox id="london" value="London" />
      <Checkbox id="amsterdam" value="Amsterdam" />
      <Checkbox id="newYork" value="New York" />
      <Checkbox id="Berlin" value="Berlin" />
    </aside>
  );
};

export default SideBar;
