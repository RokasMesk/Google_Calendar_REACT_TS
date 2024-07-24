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

export const getCurrentCellDate = (displayedMonth: Date, day: number) => {
  return new Date(displayedMonth.getFullYear(), displayedMonth.getMonth(), day);
};

export const getFormattedDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });
};

export const adjustMonthByCellType = (
  date: Date,
  cellType: 'prevMonth' | 'currentMonth' | 'nextMonth',
  day: number
): Date => {
  const newDate = new Date(date);
  switch (cellType) {
    case 'prevMonth':
      newDate.setMonth(newDate.getMonth() - 1);
      break;
    case 'nextMonth':
      newDate.setMonth(newDate.getMonth() + 1);
      break;
  }

  newDate.setDate(day);
  return newDate;
};
