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


export const isDateFromThisMonth = (currentDate: Date, cellDate:Date): boolean => {
  return (
    cellDate.getFullYear() === currentDate.getFullYear() &&
    cellDate.getMonth() === currentDate.getMonth()
  );
};

export const getFirstDayOfMonth = (date:Date) => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  );
}

export const getLastMonthsFirstDayInMonthCalendar = (firstDayOfCurrentMonth:Date) => {
  return new Date(
    firstDayOfCurrentMonth.getFullYear(),
    firstDayOfCurrentMonth.getMonth(),
    firstDayOfCurrentMonth.getDate() - getStartDay(firstDayOfCurrentMonth) + 1
  );
}

export const getCellDate = (baseDate:Date, offset:number) => {
  const cellDate = new Date(baseDate);
  cellDate.setDate(cellDate.getDate() + offset);
  return cellDate;
}

export const getPreviousMonth = (displayedMonthDate: Date) => {
  return new Date(
    displayedMonthDate.getFullYear(),
    displayedMonthDate.getMonth() - 1,
    1
  )
}

export const getNextMonth = (displayedMonthDate: Date) => {
  return new Date(
    displayedMonthDate.getFullYear(),
    displayedMonthDate.getMonth() + 1,
    1
  )
}