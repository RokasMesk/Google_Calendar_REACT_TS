import classNames from 'classnames';
import {
  getCellType,
  isToday,
  getCurrentCellDate,
  adjustMonthByCellType,
  areTwoDatesEqual,
} from '../dateUtils';
import { useState } from 'react';
import styles from './aside.module.css';
import {
  getFirstDayOfMonthInFullDate,
  getLastDayOfMonthInFullDate,
  getPreviousMonthTotalDays,
  getStartDay,
} from '../dateUtils';
import { CELLS_IN_MONTH_CALENDAR } from '../constants';

interface DateCellsProps {
  date: Date;
  setCurrentDate: (date: Date) => void;
}

const DateCells = ({ date, setCurrentDate }: DateCellsProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const firstDayOfMonthInFullDate = getFirstDayOfMonthInFullDate(date);
  const startDay = getStartDay(firstDayOfMonthInFullDate);
  const lastDayOfMonthInFullDate = getLastDayOfMonthInFullDate(
    firstDayOfMonthInFullDate
  );

  const totalDays = lastDayOfMonthInFullDate.getDate();
  const previousMonthTotalDays = getPreviousMonthTotalDays(
    firstDayOfMonthInFullDate
  );

  const handleDateClick = (cellDate: Date) => {
    setSelectedDate(cellDate);
    setCurrentDate(cellDate);
  };

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
        let cellDate = getCurrentCellDate(firstDayOfMonthInFullDate, day);
        adjustMonthByCellType(cellDate, cellType, day);
        const className = classNames(styles.cell, {
          [styles.today]: cellType === 'currentMonth' && isToday(cellDate),
          [styles.prevMonthDay]: cellType === 'prevMonth',
          [styles.nextMonthDay]: cellType === 'nextMonth',
          [styles.selected]:
            selectedDate && areTwoDatesEqual(selectedDate, cellDate),
        });

        return (
          <div
            className={className}
            key={`${cellType}-${day}`}
            onClick={() => handleDateClick(cellDate)}
          >
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
