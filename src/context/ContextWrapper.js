import React, { useState, useEffect, useReducer } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
/*
useReducer manage the state similar to the useState hook,
useReducer hook uses the same concept as the reducers in Redux.
*/

function savedEventReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}

function initEvents() {
  const storageEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [savedEvent, dispatchCalEvent] = useReducer(
    savedEventReducer,
    [],
    initEvents
  );
  useEffect(() => {
    if (smallCalendarMonth !== null) setMonthIndex(smallCalendarMonth);
  }, [smallCalendarMonth]);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
