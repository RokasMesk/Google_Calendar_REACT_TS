import classNames from 'classnames';
import { createArray } from '../utils';
import {
  isToday,
  areTwoDatesEqual,
  isDateFromThisMonth,
  getFirstDayOfMonth,
  getMonthCalendarStartDate,
  getCellDateForMonthCalendar,
} from '../dateUtils';
import styles from './aside.module.css';
import { CELLS_IN_MONTH_CALENDAR } from '../constants';

interface DateCellsProps {
  calendarDate: Date;
  setCalendarDate: (calendarDate: Date) => void;
}

const DateCells = ({ calendarDate, setCalendarDate }: DateCellsProps) => {
  const handleDateClick = (cellDate: Date) => {
    setCalendarDate(cellDate);
  };
  const firstDayOfTheMonth = getFirstDayOfMonth(calendarDate);

  const lastMonthsFirstDayInMonthCalendar =
    getMonthCalendarStartDate(firstDayOfTheMonth);
  return (
    <div className={styles.calendarWidgetDates}>
      {createArray(CELLS_IN_MONTH_CALENDAR).map((_, i) => {
        const cellDate = getCellDateForMonthCalendar(
          lastMonthsFirstDayInMonthCalendar,
          i
        );
        const cellDay = cellDate.getDate();

        const className = classNames(styles.cell, {
          [styles.today]: isToday(cellDate),
          [styles.notCurrentMonthDay]: !isDateFromThisMonth(
            calendarDate,
            cellDate
          ),
          [styles.selected]: areTwoDatesEqual(calendarDate, cellDate),
        });
        return (
          <div
            className={className}
            key={`${cellDate.toISOString()}`}
            onClick={() => handleDateClick(cellDate)}
          >
            {cellDay}
          </div>
        );
      })}
    </div>
  );
};

export default DateCells;
