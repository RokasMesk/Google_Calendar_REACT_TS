import React from 'react';
import classNames from 'classnames';
import { getCellType, isToday, getCurrentCellDate } from '../utils';
import styles from './aside.module.css';
import {
  getFirstDayOfMonthInFullDate,
  getLastDayOfMonthInFullDate,
  getPreviousMonthTotalDays,
  getStartDay,
} from '../utils';
import { CELLS_IN_MONTH_CALENDAR } from '../constants';

interface DateCellsProps {
  date: Date;
}

const DateCells = ({ date }: DateCellsProps) => {
  const firstDayOfMonthInFullDate = getFirstDayOfMonthInFullDate(date);
  const startDay = getStartDay(firstDayOfMonthInFullDate);
  const lastDayOfMonthInFullDate = getLastDayOfMonthInFullDate(
    firstDayOfMonthInFullDate
  );
  const totalDays = lastDayOfMonthInFullDate.getDate();
  const previousMonthTotalDays = getPreviousMonthTotalDays(
    firstDayOfMonthInFullDate
  );

  return (
    <div className={styles.calendarWidgetDates}>
      {Array.from({ length: CELLS_IN_MONTH_CALENDAR }).map((_, index) => {
        const cellType = getCellType(index, startDay - 1, totalDays);
        const day = getCellDay(
          index,
          startDay - 1,
          totalDays,
          previousMonthTotalDays
        );
        const cellDate = getCurrentCellDate(firstDayOfMonthInFullDate, day);

        const className = classNames(styles.cell, {
          [styles.today]: cellType === 'currentMonth' && isToday(cellDate),
          [styles.prevMonthDay]: cellType === 'prevMonth',
          [styles.nextMonthDay]: cellType === 'nextMonth',
        });
        return (
          <div className={className} key={`${cellType}-${day}`}>
            {day}
          </div>
        );
      })}
    </div>
  );
};


 const getCellDay = (
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
export default DateCells;
