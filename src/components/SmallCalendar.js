import React, { useState, useEffect, useContext } from "react";
import dayjs from "dayjs";
import { getMonth } from "../util";
import GlobalContext from "../context/GlobalContext";

export default function SmallCalendar() {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month()); // is 11 because we are on Dec now
  const [currentMonth, setCurretMoth] = useState(getMonth());
  //[Array(7), Array(7), Array(7), Array(7), Array(7)]

  useEffect(() => {
    setCurretMoth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  //monthIndex 11 because we are on Dec now
  //if move month with arrows on the header, the gloal monthIndex changes
  const { monthIndex } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  function handlePrevMonth() {
    setCurrentMonthIdx(currentMonthIdx - 1);
  }
  function handleNextMonth() {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }
  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
        </p>
        <button
          onClick={handlePrevMonth}
          className="material-icons-outlined cursor-ponter text-gray-600 mx-2"
        >
          {/* mx-2 => margin-left: 0.5rem, margin-right: 0.5rem; */}
          chevron_left
        </button>

        <button
          onClick={handleNextMonth}
          className="material-icons-outlined cursor-ponter text-gray-600 mx-2"
        >
          chevron_right
        </button>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-sm py-1 text-center">
            {/* {console.log("day->", day.format("dd").charAt(0))} */}
            {day.format("dd").charAt(0)}
          </span>
        ))}

        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button key={idx} className={`py-1 w-full`}>
                {/* py = > padding-top: 0.25rem; padding-bottom: 0.25rem; */}
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
