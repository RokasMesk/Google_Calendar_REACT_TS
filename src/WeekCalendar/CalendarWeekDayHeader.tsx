import { getFirstDayOfTheWeek, isToday } from '../dateUtils';
import { createArray } from '../utils';
import styles from './weekCalendar.module.css';
import classNames from 'classnames';

interface CalendarWeekDayHeaderProps {
  calendarDate: Date;
}

function CalendarWeekDayHeader({ calendarDate }: CalendarWeekDayHeaderProps) {
  const startOfWeek = getFirstDayOfTheWeek(calendarDate);

  return (
    <div className={styles.weekHeader}>
      <div className={styles.dayName} key="empty"></div>
      {createArray(7).map((_, i) => {
        const day = new Date(startOfWeek);
        day.setDate(day.getDate() + i);
        const dayName = day.toLocaleDateString('en-US', { weekday: 'short' });
        const dayKey = day.toISOString().split('T')[0];
        return (
          <div
            className={classNames(styles.day, {
              [styles.currentDay]: isToday(day),
            })}
            key={dayKey}
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
