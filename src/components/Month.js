import React from "react";
import Day from "./Day";

// {month} comes from App.js
export default function Month({ month }) {

  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5 ">
      {month.map((week, i) => (
        <React.Fragment key={i}>
          {week.map((day, idx) => (
            //   when map row, access every column so days
            <Day day={day} key={idx} weekIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
