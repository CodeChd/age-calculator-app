import { inputToken } from "./utils/constant";

export default function Date({
  ageHandler,
  isError,
  isInputErrorMsg,
  inputError,
  day,
  months,
  year,
}) {
  return (
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
            className={`${inputToken} ${
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
            className={`${inputToken} ${
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
            className={`${inputToken} ${
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
  );
}
