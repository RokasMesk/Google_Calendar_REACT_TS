import { isToday } from '../utils';
import styles from './aside.module.css';
const TOTAL_CELLS = 42;

interface DateCellsProps {
  date: Date;
}

const DateCells = ({ date }: DateCellsProps) => {
  const displayedMonth = new Date(date.getFullYear(), date.getMonth(), 1);

  const firstDayOfMonth = new Date(
    displayedMonth.getFullYear(),
    displayedMonth.getMonth(),
    1
  );
  let startDay = firstDayOfMonth.getDay();
  if (startDay === 0) startDay = 7;
  const lastDayOfMonth = new Date(
    displayedMonth.getFullYear(),
    displayedMonth.getMonth() + 1,
    0
  );
  const totalDays = lastDayOfMonth.getDate();
  const previousMonthLastDay = new Date(
    displayedMonth.getFullYear(),
    displayedMonth.getMonth(),
    0
  );
  const previousMonthTotalDays = previousMonthLastDay.getDate();

  return (
    <div className={styles.calendarWidgetDates} id="calendarDates">
      {Array.from({ length: TOTAL_CELLS }).map((_, index) => {
        let day;
        let className = '';

        if (index < startDay - 1) {
          day = previousMonthTotalDays - (startDay - 2 - index);
          className = styles.prevMonthDay;
        } else if (index < startDay - 1 + totalDays) {
          day = index - (startDay - 2);
          const cellDate = new Date(
            displayedMonth.getFullYear(),
            displayedMonth.getMonth(),
            day
          );
          if (isToday(cellDate)) {
            className = styles.today;
          }
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
