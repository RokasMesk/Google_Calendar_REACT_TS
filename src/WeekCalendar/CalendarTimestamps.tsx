import styles from './weekCalendar.module.css';

const CalendarTimestamps = () => {
  const hours = Array.from({ length: 19 }, (_, i) => i + 5);
  return (
    <div className={styles.timeColumn}>
      {hours.map((hour) => {
        const hourString = `${hour}:00`;
        return (
          <div className={styles.timestamp} key={hour}>
            {hourString}
          </div>
        );
      })}
    </div>
  );
};

export default CalendarTimestamps;
