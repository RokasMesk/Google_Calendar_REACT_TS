import classNames from 'classnames';
import { getCellType } from '../utils';
import {
  isToday,
  getCurrentCellDate,
  adjustMonthByCellType,
  areTwoDatesEqual,
} from '../dateUtils';
import styles from './aside.module.css';
import {
  getFirstDayOfMonthInFullDate,
  getLastDayOfMonthInFullDate,
  getPreviousMonthTotalDays,
  getStartDay,
} from '../dateUtils';
import { CELLS_IN_MONTH_CALENDAR } from '../constants';

interface DateCellsProps {
  calendarDate: Date;
  setCalendarDate: (calendarDate: Date) => void;
}

const DateCells = ({ calendarDate, setCalendarDate }: DateCellsProps) => {
  const firstDayOfMonthInFullDate = getFirstDayOfMonthInFullDate(calendarDate);
  const startDay = getStartDay(firstDayOfMonthInFullDate);
  const lastDayOfMonthInFullDate = getLastDayOfMonthInFullDate(
    firstDayOfMonthInFullDate
  );

  const totalDays = lastDayOfMonthInFullDate.getDate();
  const previousMonthTotalDays = getPreviousMonthTotalDays(
    firstDayOfMonthInFullDate
  );
  const handleDateClick = (cellDate: Date) => {
    setCalendarDate(cellDate);
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
        const cellDate = getCurrentCellDate(firstDayOfMonthInFullDate, day);
        const adjustedCellDateByMonth = adjustMonthByCellType(
          cellDate,
          cellType,
          day
        );
        const className = classNames(styles.cell, {
          [styles.today]:
            cellType === 'currentMonth' && isToday(adjustedCellDateByMonth),
          [styles.prevMonthDay]: cellType === 'prevMonth',
          [styles.nextMonthDay]: cellType === 'nextMonth',
          [styles.selected]:
            areTwoDatesEqual(calendarDate, adjustedCellDateByMonth),
        });

        return (
          <div
            className={className}
            key={`${cellType}-${day}`}
            onClick={() => handleDateClick(adjustedCellDateByMonth)}
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
