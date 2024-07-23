import classNames from 'classnames';
import {
  getCurrentCellDate,
  isCurrentMonth,
  isPreviousMonth,
  isToday,
} from '../utils';
import styles from './aside.module.css';
import {
  getDisplayedMonth,
  getFirstDayOfMonth,
  getLastDayOfMonth,
  getPreviousMonthTotalDays,
  getStartDay,
} from '../utils';
import { CELLS_IN_MONTH_CALENDAR } from '../constants';

interface DateCellsProps {
  date: Date;
}

const DateCells = ({ date }: DateCellsProps) => {
  const displayedMonth = getDisplayedMonth(date);
  const firstDayOfMonth = getFirstDayOfMonth(displayedMonth);
  const startDay = getStartDay(firstDayOfMonth);
  const lastDayOfMonth = getLastDayOfMonth(displayedMonth);
  const totalDays = lastDayOfMonth.getDate();
  const previousMonthTotalDays = getPreviousMonthTotalDays(displayedMonth);

  return (
    <div className={styles.calendarWidgetDates}>
      {Array.from({ length: CELLS_IN_MONTH_CALENDAR }).map((_, index) => {
        let day;
        let className = '';

        if (isPreviousMonth(index, startDay - 1)) {
          day = previousMonthTotalDays - (startDay - 2 - index);
          className = styles.prevMonthDay;
        } else if (isCurrentMonth(index, startDay - 1 + totalDays)) {
          day = index - (startDay - 2);
          const cellDate = getCurrentCellDate(displayedMonth, day);
          className = classNames({
            [styles.today]: isToday(cellDate),
          });
        } else {
          day = index - (startDay - 1 + totalDays) + 1;
          className = styles.nextMonthDay;
        }

        return (
          <div className={className} key={`${className}-${day}`}>
            {day}
          </div>
        );
      })}
    </div>
  );
};

export default DateCells;
