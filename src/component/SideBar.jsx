import React, { useContext } from "react";
import Checkbox from "./Checkbox";
import Input from "./Input";
import earthIcon from "../assets/icon/earth.svg";
import { SearchContext } from "../context/SearchContext";
import "./SideBar.css";

const SideBar = () => {
  const { setLocation, setFullTime } = useContext(SearchContext);

  return (
    <aside className="SideBar">
      <Checkbox getBool setChecked={(bool) => setFullTime(bool)} id="fullTime" value="Full Time" />
      <h3 className="title-minor">Location</h3>
      <Input
        setField={(val) => setLocation(val)}
        icon={earthIcon}
        placeHolder="City, state, zip code or country"
      />
      <Checkbox setChecked={(val) => setLocation(val)} id="london" value="London" />
      <Checkbox setChecked={(val) => setLocation(val)} id="amsterdam" value="Amsterdam" />
      <Checkbox setChecked={(val) => setLocation(val)} id="newYork" value="New York" />
      <Checkbox setChecked={(val) => setLocation(val)} id="Berlin" value="Berlin" />
    </aside>
  );
};

export default SideBar;
