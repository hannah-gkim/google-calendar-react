import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { getMonth } from "../util";

export default function SmallCalendar() {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month()); // is 10 because we are on november now
  const [currentMonth, setCurretMoth] = useState(getMonth());
  //[Array(7), Array(7), Array(7), Array(7), Array(7)]
  useEffect(() => {
    setCurretMoth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);
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
    </div>
  );
}
