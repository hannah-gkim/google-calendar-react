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

  const { monthIndex } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  //   console.log("curmonth idx->", currentMonthIdx);
  function handlePrevMonth() {
    setCurrentMonthIdx(currentMonthIdx - 1);
    // console.log("prev idx->", currentMonthIdx);
  }
  function handleNextMonth() {
    setCurrentMonthIdx(currentMonthIdx + 1);
    // console.log("next idx->", currentMonthIdx);
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
            {day.format("dd").charAt(0)}
          </span>
        ))}

        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button key={idx} className={`py-1 w-full`}>
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
