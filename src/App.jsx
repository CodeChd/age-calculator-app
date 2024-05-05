import { useRef } from "react";
import { calculateAge } from "./utils/calculateAge";
import { useState } from "react";

function App() {
  const day = useRef(null);
  const months = useRef(null);
  const year = useRef(null);

  const [contentDay, setContentDay] = useState();
  const [contentMonths, setContentMonths] = useState();
  const [contentYear, setContentYear] = useState();

  const ageHandler = (e) => {
    e.preventDefault();

    const birthMonth = day.current.value;
    const monthsResult = months.current.value;
    const yearResult = year.current.value;

    const {
      years: byears,
      months: bmonth,
      days: bdays,
    } = calculateAge(birthMonth, monthsResult, yearResult);

    setContentDay(bdays);
    setContentMonths(bmonth);
    setContentYear(byears);
  };

  return (
    <main className="grid min-h-screen place-content-center w-full h-full">
      <div className="p-12 relative bg-neutral-white rounded-3xl rounded-br-[8rem] h-full w-[40rem]">
        <div className="pb-20">
          <div className="relative max-w-xl border-neutral-smokeGrey ">
            <form onSubmit={ageHandler}>
              <ul
                aria-label="date-setter"
                className="uppercase font-poppins font-bold flex gap-5 text-neutral-smokeGrey "
              >
                <li className="flex flex-col">
                  <label htmlFor="day">Day</label>
                  <input
                    ref={day}
                    type="text"
                    className="w-32 h-14 border-solid border-[1px] rounded mt-1 border-neutral-smokeGrey outline-none p-2 font-bold text-2xl focus:ring-primary-purple/40 focus:ring-[1px]"
                    placeholder="DD"
                  />
                </li>
                <li className="flex flex-col">
                  <label htmlFor="month">Month</label>
                  <input
                    ref={months}
                    type="text"
                    className="w-32 h-14 border-solid border-[1px] rounded my-1  border-neutral-smokeGrey outline-none p-2 font-bold text-2xl focus:ring-primary-purple/40 focus:ring-[1px]"
                    placeholder="MM"
                  />
                </li>
                <li className="flex flex-col">
                  <label htmlFor="year">Year</label>
                  <input
                    ref={year}
                    type="text"
                    className="w-32 h-14 border-solid border-[1px] rounded mt-1  border-neutral-smokeGrey outline-none p-2 font-bold text-2xl focus:ring-primary-purple/40 focus:ring-[1px]"
                    placeholder="YYYY"
                  />
                </li>
              </ul>
              <div className="relative group">
                <button className="float-right" type="submit">
                  <img
                    src="/assets/images/icon-arrow.svg"
                    className="group-hover:bg-neutral-offBlack bg-primary-purple p-4 rounded-full transition-colors "
                    alt=""
                  />
                </button>
                <hr className=" absolute -bottom-10  border-neutral-smokeGrey w-[86%]   " />
              </div>
            </form>
          </div>
        </div>

        <div className="text-7xl font-poppins font-bold">
          <p>
            <span className="text-primary-purple text-[5rem] pr-2 inline-block">
              {!contentYear ? "--" : contentYear}
            </span>
            years
          </p>
          <p>
            <span className="text-primary-purple text-[5rem] pr-2 inline-block">
              {!contentMonths ? "--" : contentMonths}
            </span>
            months
          </p>
          <p>
            <span className="text-primary-purple text-[5rem] pr-2 inline-block">
              {!contentDay ? "--" : contentDay}
            </span>
            days
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
