export function getFirstDayOfTheWeek(date: Date): Date {
  let newDate = new Date(date);
  const day = newDate.getDay();
  const diff = newDate.getDate() - day + (day === 0 ? -6 : 1);
  const startOfWeek = new Date(newDate.setDate(diff));
  startOfWeek.setHours(0, 0, 0, 0);
  return startOfWeek;
}

export function isToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

export const getDisplayedMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

export const getFirstDayOfMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

export const getLastDayOfMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};

export const getPreviousMonthTotalDays = (date: Date) => {
  const previousMonthLastDay = new Date(date.getFullYear(), date.getMonth(), 0);
  return previousMonthLastDay.getDate();
};

export const getStartDay = (firstDayOfMonth: Date) => {
  let startDay = firstDayOfMonth.getDay();
  if (startDay === 0) startDay = 7;
  return startDay;
};

export const createArray = (length: number) => {
  return new Array(length).fill(undefined);
};

export const isPreviousMonth = (currentDay: number, startDay: number) => {
  return currentDay < startDay;
};

export const isCurrentMonth = (
  currentDay: number,
  upperBoundOfMonth: number
) => {
  return currentDay < upperBoundOfMonth;
};

export const getCurrentCellDate = (displayedMonth: Date, day: number) => {
  return new Date(displayedMonth.getFullYear(), displayedMonth.getMonth(), day);
};
