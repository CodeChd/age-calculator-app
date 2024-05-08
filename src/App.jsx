import { useRef } from "react";
import { calculateAge } from "./utils/calculateAge";
import { useState } from "react";
import { valiDators } from "./utils/validateInput";

function App() {
  const day = useRef(null);
  const months = useRef(null);
  const year = useRef(null);

  const [contentDay, setContentDay] = useState();
  const [contentMonths, setContentMonths] = useState();
  const [contentYear, setContentYear] = useState();

  const [isError, setIsError] = useState(false);

  const [inputError, setInputError] = useState(false);

  const [isInputErrorMsg, setIsInputErrorMsg] = useState({
    birthDay: "",
    monthsResult: "",
    yearResult: "",
  });

  const ageHandler = (e) => {
    e.preventDefault();

    const birthDay = day.current.value;
    const monthsResult = months.current.value;
    const yearResult = year.current.value;

    const inputs = [
      { value: birthDay, type: "birthDay" },
      { value: monthsResult, type: "monthsResult" },
      { value: yearResult, type: "yearResult" },
    ];

    let isEmpty = false;
    let containsValue = false
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        isEmpty = true;
        containsValue = false
      } else if (input.value.split().some((data) => data.length > 0)) {
        console.log(input.value)
        isEmpty = false;
        containsValue = true
      }
    });

    if (isEmpty ) {
      setIsError(true);
      return;
    } else {
      inputs.forEach((input) => {
        const validatorFunction = valiDators[input.type];
        if (validatorFunction(input.value)) {
          setIsInputErrorMsg((prev) => ({
            ...prev,
            [input.type]: validatorFunction(input.value),
          }));
          console.log(validatorFunction(input.value));
          setInputError(true);
        }
      });
    }

    if (isError || inputError) {
      return;
    } else {
      const {
        years: byears,
        months: bmonth,
        days: bdays,
      } = calculateAge(birthDay, monthsResult, yearResult);

      setContentDay(bdays);
      setContentMonths(bmonth);
      setContentYear(byears);
    }
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
                <li className="flex flex-col gap-2">
                  <label
                    htmlFor="day"
                    className={`${isError && "text-primary-lightRed/85"}`}
                  >
                    Day
                  </label>
                  <input
                    ref={day}
                    type="text"
                    className={`w-32 h-14 border-solid border-[1px] rounded  border-neutral-smokeGrey outline-none p-2 font-bold text-2xl focus:ring-primary-purple/40 focus:ring-[1px] text- ${
                      isError ? "ring-1 ring-primary-lightRed" : ""
                    }`}
                    placeholder="DD"
                  />
                  {inputError ? (
                    <span className="italic text-xs normal-case text-primary-lightRed/60">
                      {isInputErrorMsg.birthDay}
                    </span>
                  ) : (
                    isError && (
                      <span className="italic text-xs normal-case text-primary-lightRed/60">
                        This field is required
                      </span>
                    )
                  )}
                </li>
                <li className="flex flex-col gap-2">
                  <label
                    htmlFor="month"
                    className={`${isError && "text-primary-lightRed/85"}`}
                  >
                    Month
                  </label>
                  <input
                    ref={months}
                    type="text"
                    className={`w-32 h-14 border-solid border-[1px] rounded  border-neutral-smokeGrey outline-none p-2 font-bold text-2xl focus:ring-primary-purple/40 focus:ring-[1px] text- ${
                      isError ? "ring-1 ring-primary-lightRed" : ""
                    }`}
                    placeholder="MM"
                  />
                  {inputError ? (
                    <span className="italic text-xs normal-case text-primary-lightRed/60">
                      {isInputErrorMsg.monthsResult}
                    </span>
                  ) : (
                    isError && (
                      <span className="italic text-xs normal-case text-primary-lightRed/60">
                        This field is required
                      </span>
                    )
                  )}
                </li>
                <li className="flex flex-col gap-2">
                  <label
                    htmlFor="year"
                    className={`${isError && "text-primary-lightRed/85"}`}
                  >
                    Year
                  </label>
                  <input
                    ref={year}
                    type="text"
                    className={`w-32 h-14 border-solid border-[1px] rounded   border-neutral-smokeGrey outline-none p-2 font-bold text-2xl focus:ring-primary-purple/40 focus:ring-[1px] text- ${
                      isError ? "ring-1 ring-primary-lightRed" : ""
                    }`}
                    placeholder="YYYY"
                  />
                  {inputError ? (
                    <span className="italic text-xs normal-case text-primary-lightRed/60">
                      {isInputErrorMsg.yearResult}
                    </span>
                  ) : (
                    isError && (
                      <span className="italic text-xs normal-case text-primary-lightRed/60">
                        This field is required
                      </span>
                    )
                  )}
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
              {!contentYear ? (contentYear === 0 ? "0" : "--") : contentYear}
            </span>
            years
          </p>
          <p>
            <span className="text-primary-purple text-[5rem] pr-2 inline-block">
              {!contentMonths
                ? contentMonths === 0
                  ? "0"
                  : "--"
                : contentMonths}
            </span>
            months
          </p>
          <p>
            <span className="text-primary-purple text-[5rem] pr-2 inline-block">
              {!contentDay ? (contentDay === 0 ? "0" : "--") : contentDay}
            </span>
            days
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
