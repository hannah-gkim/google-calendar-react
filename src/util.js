import dayjs from "dayjs";
//month 0-11
export function getMonth(month = dayjs().month()) {
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day(); //0-6

  /******************************/
  //   console.log("year,month,day--->", year, month, firstDayOfTheMonth);
  /******************************/
//   console.log("firstDayOfTheMonth--->", firstDayOfTheMonth); //0 1 2...6
  let curretMonthCount = 0 - firstDayOfTheMonth;
//   console.log("curretMonthCount-->", curretMonthCount); // 0 -1 -2... -6
  //5 rows each month, 7 columns for week
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      curretMonthCount++;
      return dayjs(new Date(year, month, curretMonthCount));
    }); //7 columns
  });
  return daysMatrix;
}
