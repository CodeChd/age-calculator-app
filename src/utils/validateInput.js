import { currentYear } from "./constant";

export const validateInput = (inputValue, fieldType) => {

    if (fieldType === 'birthDay' && (Number(inputValue) < 1 || Number(inputValue) > 31)) {
      return "Must be a valid date";
    }
    if (fieldType === 'monthsResult' && (Number(inputValue) < 1 || Number(inputValue) > 12)) {
      return "Must be a valid month!";
    }
    if (fieldType === 'yearResult' && Number(inputValue) > currentYear) {
      return "Must be of past!";
    }
    return false; 
  };