import { useRef } from "react";
import { calculateAge } from "./utils/calculateAge";
import { useState } from "react";
import { valiDators } from "./utils/validateInput";
import Age from "./Age";
import Date from "./Date";

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
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        isEmpty = true;
      } else if (input.value.split().some((data) => data.length > 1)) {
        const validatorFunction = valiDators[input.type];
        const validatorResult = validatorFunction(input.value);

        if (validatorResult) {
          setIsInputErrorMsg({
            [input.type]: validatorResult,
          });
          setInputError(true);
        }
      }
    });

    if (isEmpty) {
      setIsError(true);
      return;
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
            <Date
              ageHandler={ageHandler}
              isError={isError}
              isInputErrorMsg={isInputErrorMsg}
              inputError={inputError}
              day={day}
              months={months}
              year={year}
            />
          </div>
        </div>

        <div className="text-7xl font-poppins font-bold">
          <Age
            contentYear={contentYear}
            contentMonths={contentMonths}
            contentDay={contentDay}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
