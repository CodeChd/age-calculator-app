export function calculateAge(birthDay, birthMonth, birthYear) {
  const today = new Date();
  const currentYear = today.getUTCFullYear();
  const currentMonth = today.getUTCMonth() + 1; // JavaScript months are 0-indexed.
  const currentDay = today.getUTCDate();

  let ageYears = currentYear - birthYear;
  let ageMonths = currentMonth - birthMonth;
  let ageDays = currentDay - birthDay;

  // Adjust for case where current day is before the birth day of the month.
  if (ageDays < 0) {
    // Borrow days from the previous month.
    const previousMonth = currentMonth - 1;
    const daysInPreviousMonth = new Date(
      currentYear,
      previousMonth,
      0
    ).getUTCDate(); // 0th day of the current month is the last day of the previous month.
    ageDays += daysInPreviousMonth
    ageMonths--;
  }

  // Adjust for case where current month is before the birth month.
  if (ageMonths < 0) {
    ageMonths += 12;
    ageYears--;
  }

  return { years: ageYears, months: ageMonths, days: ageDays };
}
