import { getFirstDayOfTheWeek, isToday } from '../utils';
import styles from './calendar-main.module.css';

interface CalendarWeekDayHeaderProps {
  date: Date;
}

function CalendarWeekDayHeader({ date }: CalendarWeekDayHeaderProps) {
  const startOfWeek = getFirstDayOfTheWeek(date);

  return (
    <div className={styles.weekHeader}>
      <div className={styles.dayName} key="empty"></div>
      {new Array(7).fill(undefined).map((_, i) => {
        const day = new Date(startOfWeek);
        day.setDate(day.getDate() + i);
        const dayName = day.toLocaleDateString('en-US', { weekday: 'short' });
        return (
          <div
            className={`${styles.day} ${isToday(day) ? styles.currentDay : ''}`}
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
