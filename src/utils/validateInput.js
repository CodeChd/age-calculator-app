import { currentYear } from "./constant";
const validDay = (inputValue) => {
  if (Number(inputValue) > 31 || Number(inputValue) < 1) {
    return "Must be a valid day";
  }
  return "";
};

const validMonth = (inputValue) => {
  if (Number(inputValue) > 12 || Number(inputValue) < 1) {
    return "Must be a valid month!";
  }
  return "";
};

const validYear = (inputValue) => {
  if (Number(inputValue) > currentYear || Number(inputValue) < 1) {
    return "Year must be in the past!";
  }
  return "";
};


export const valiDators = {
  birthDay: validDay,
  monthsResult: validMonth,
  yearResult: validYear,
};
