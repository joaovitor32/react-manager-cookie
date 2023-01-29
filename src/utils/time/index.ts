export const addingDaysToDate = (days = 0) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

  return date.toUTCString();
};
