export const firstCharToUpperCase = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const getTimeDifference = (time1: string, time2: string) => {
  const date1 = new Date(`1970-01-01T${time1}:00Z`);
  const date2 = new Date(`1970-01-01T${time2}:00Z`);
  const difference =
    date2.getTime() - date1.getTime() < 0
      ? date1.getTime() - date2.getTime()
      : date2.getTime() - date1.getTime();
  const hours = Math.floor(difference / (1000 * 60 * 60));
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}`;
};
