import { DAYS_IN_WEEK } from './constants';
import { MILLISECONDS_IN_HOUR } from './constants';
import { Event } from './types';
export function getStartOfWeek(date: Date): Date {
  let newDate = new Date(date);
  const day = newDate.getDay();
  const diff = newDate.getDate() - day + (day === 0 ? -6 : 1);
  const startOfWeek = new Date(newDate.setDate(diff));
  startOfWeek.setHours(0, 0, 0, 0);
  return startOfWeek;
}
export function getEndOfWeek(startOfWeek: Date): Date {
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);
  return endOfWeek;
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

export const getMonthCalendarStartDate = (firstDayOfCurrentMonth: Date) => {
  return new Date(
    firstDayOfCurrentMonth.getFullYear(),
    firstDayOfCurrentMonth.getMonth(),
    firstDayOfCurrentMonth.getDate() - getStartDay(firstDayOfCurrentMonth) + 1
  );
};

export const getCellDateForMonthCalendar = (baseDate: Date, offset: number) => {
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
  return formatTimeForModalForm(addition);
};

export const formatTimeForModalForm = (hour: number): string => {
  if (hour < 10) {
    return `0${hour}:00`;
  }
  return `${hour}:00`;
};

export const getCellDateForWeekCalendar = (
  calendarDate: Date,
  indexOfCalendarCell: number
): Date => {
  const firstDayOfWeek = getStartOfWeek(calendarDate);
  const day = indexOfCalendarCell % DAYS_IN_WEEK;
  const hourIndex = Math.floor(indexOfCalendarCell / DAYS_IN_WEEK);
  const cellDate = new Date(firstDayOfWeek);
  cellDate.setDate(cellDate.getDate() + day);
  cellDate.setHours(5 + hourIndex);
  return cellDate;
};

export const differenceBetweenTwoDatesInDays = (
  date1: string,
  date2: string
): number => {
  const startDate = new Date(date1);
  const endDate = new Date(date2);
  return Math.ceil(
    (endDate.getTime() - startDate.getTime()) / MILLISECONDS_IN_HOUR
  );
};

export const dateIsInRange = (
  startDate: Date,
  endDate: Date,
  dateToCheck: Date
): boolean => {
  return startDate <= dateToCheck && endDate >= dateToCheck;
};

export function formatYearMonthDayForKey(date: Date): string {
  const startOfWeekDate = getStartOfWeek(date);

  return startOfWeekDate.toISOString();
}

export const convertEventDatesToObjects = (event: Event): Event => ({
  ...event,
  startDateTime: new Date(event.startDateTime),
  endDateTime: new Date(event.endDateTime),
});
