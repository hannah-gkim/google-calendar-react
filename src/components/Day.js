import dayjs from "dayjs";
import React from "react";
import { useContext } from "react/cjs/react.development";
import GlobalContext from "../context/GlobalContext";

export default function Day({ day, weekIdx }) {
  function getCurrentDayClass() {
    // console.log("format-->", day.format("DD-MM-YY"));
    //dayjs().format() indiciates today's daate
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-red-200 text-white rounded-full w-7"
      : "";
  }
  const { setDaySelected, setShowEventModal } = useContext(GlobalContext);
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {weekIdx === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {" "}
      </div>
    </div>
  );
}
