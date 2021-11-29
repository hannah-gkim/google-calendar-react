import React, { useState } from "react";
import { getMonth } from "./util";
import "./App.css";
import CalendarHeader from "./components/CalendarHeader";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";

function App() {
  // console.log(getMonth()[0][1]["$y"]); //2021
  /*
  getMonth() => (5)[arr(7), arr(7), arr(7), arr(7), arr(7)]
  each arr has 7 days[{..}*7]
  each {} => {$D:1, $M:11, $y:2021...}
  */
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  return (
    <React.Fragment>
      <div className="h-screen flex flex-columns">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
