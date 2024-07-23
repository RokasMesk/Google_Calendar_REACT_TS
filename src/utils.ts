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

export const getFirstDayOfMonthInFullDate = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

export const getLastDayOfMonthInFullDate = (date: Date) => {
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

export const getCurrentCellDate = (displayedMonth: Date, day: number) => {
  return new Date(displayedMonth.getFullYear(), displayedMonth.getMonth(), day);
};

export const getFormattedDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });
};

export const getCellDay = (
  index: number,
  startDay: number,
  totalDays: number,
  previousMonthTotalDays: number
): number => {
  if (index < startDay) {
    return previousMonthTotalDays - (startDay - index - 1);
  } else if (index < startDay + totalDays) {
    return index - startDay + 1;
  } else {
    return index - (startDay + totalDays) + 1;
  }
};

export const getCellType = (
  index: number,
  startDay: number,
  totalDays: number
): 'prevMonth' | 'currentMonth' | 'nextMonth' => {
  if (index < startDay) {
    return 'prevMonth';
  } else if (index < startDay + totalDays) {
    return 'currentMonth';
  } else {
    return 'nextMonth';
  }
};
