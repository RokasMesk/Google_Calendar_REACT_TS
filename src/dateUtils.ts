import { DAYS_IN_WEEK } from './constants';

export function getFirstDayOfTheWeek(date: Date): Date {
  let newDate = new Date(date);
  const day = newDate.getDay();
  const diff = newDate.getDate() - day + (day === 0 ? -6 : 1);
  const startOfWeek = new Date(newDate.setDate(diff));
  startOfWeek.setHours(0, 0, 0, 0);
  return startOfWeek;
}
export const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export function isToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

export const areTwoDatesEqual = (
  firstDate: Date,
  secondDate: Date
): boolean => {
  return (
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getDate() === secondDate.getDate()
  );
};

export const getStartDay = (firstDayOfMonth: Date) => {
  let startDay = firstDayOfMonth.getDay();
  if (startDay === 0) startDay = 7;
  return startDay;
};

export const getFormattedDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });
};

export const isDateFromThisMonth = (
  currentDate: Date,
  cellDate: Date
): boolean => {
  return (
    cellDate.getFullYear() === currentDate.getFullYear() &&
    cellDate.getMonth() === currentDate.getMonth()
  );
};

export const getFirstDayOfMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

export const getLastMonthsFirstDayInMonthCalendar = (
  firstDayOfCurrentMonth: Date
) => {
  return new Date(
    firstDayOfCurrentMonth.getFullYear(),
    firstDayOfCurrentMonth.getMonth(),
    firstDayOfCurrentMonth.getDate() - getStartDay(firstDayOfCurrentMonth) + 1
  );
};

export const getCellDate = (baseDate: Date, offset: number) => {
  const cellDate = new Date(baseDate);
  cellDate.setDate(cellDate.getDate() + offset);
  return cellDate;
};

export const getPreviousMonth = (displayedMonthDate: Date) => {
  return new Date(
    displayedMonthDate.getFullYear(),
    displayedMonthDate.getMonth() - 1,
    1
  );
};

export const getNextMonth = (displayedMonthDate: Date) => {
  return new Date(
    displayedMonthDate.getFullYear(),
    displayedMonthDate.getMonth() + 1,
    1
  );
};

export const addOneHour = (hour: number): string => {
  const addition = hour + 1;
  return formatHourMinutesForInputForm(addition);
};

export const formatHourMinutesForInputForm = (hour: number): string => {
  if (hour < 10) {
    return `0${hour}:00`;
  }
  return `${hour}:00`;
};

export const calculateCellDate = (
  calendarDate: Date,
  indexOfCalendarCell: number
): Date => {
  const firstDayOfWeek = getFirstDayOfTheWeek(calendarDate);
  const day = indexOfCalendarCell % DAYS_IN_WEEK;
  const hourIndex = Math.floor(indexOfCalendarCell / DAYS_IN_WEEK);
  const cellDate = new Date(firstDayOfWeek);
  cellDate.setDate(cellDate.getDate() + day);
  cellDate.setHours(5 + hourIndex);
  return cellDate;
};
