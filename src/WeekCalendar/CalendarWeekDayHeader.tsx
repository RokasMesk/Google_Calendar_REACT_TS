import { createArray, getFirstDayOfTheWeek, isToday } from '../utils';
import styles from './weekCalendar.module.css';
import classNames from 'classnames';

interface CalendarWeekDayHeaderProps {
  date: Date;
}

function CalendarWeekDayHeader({ date }: CalendarWeekDayHeaderProps) {
  const startOfWeek = getFirstDayOfTheWeek(date);

  return (
    <div className={styles.weekHeader}>
      <div className={styles.dayName} key="empty"></div>
      {createArray(7).map((_, i) => {
        const day = new Date(startOfWeek);
        day.setDate(day.getDate() + i);
        const dayName = day.toLocaleDateString('en-US', { weekday: 'short' });
        return (
          <div
            className={classNames(styles.day, {
              [styles.currentDay]: isToday(day),
            })}
            key={i}
          >
            <span className={styles.dayName}>{dayName}</span>
            <span className={styles.dayNumber}>{day.getDate()}</span>
          </div>
        );
      })}
    </div>
  );
}

export default CalendarWeekDayHeader;
