import React, { useState, useContext, useEffect } from "react";
import { getMonth } from "./util";
import "./App.css";
import CalendarHeader from "./components/CalendarHeader";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";
import GlobalContext from "./context/GlobalContext";

function App() {
  // console.log(getMonth()[0][1]["$y"]); //2021
  //getMonth returns [[day],[day]...]
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext); //monthIdx changes
  //componentDidMount...
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      <div className="h-screen flex flex-col">
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
