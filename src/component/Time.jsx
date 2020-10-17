import React from "react";
import * as dayjs from "dayjs";
import * as RelativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/en";

dayjs.extend(RelativeTime);
dayjs.locale("en");

const Time = ({ value, icon }) => {
    let day = dayjs();

    return (
    <div className="time-post">
      <img src={icon} alt="icon" />
      {day.to(value)}
    </div>
  );
};

export default Time;
