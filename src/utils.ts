export const createArray = (length: number) => {
  return new Array(length).fill(undefined);
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
