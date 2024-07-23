import styles from './calendar-main.module.css';
import CalendarCells from './CalendarCells';
import CalendarWeekDayHeader from './CalendarWeekDayHeader';

interface CalendarMainProps {
  date: Date;
}

const generateTimestamps = () => {
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

function CalendarMain({ date }: CalendarMainProps) {
  return (
    <main className={styles.calendarMain}>
      <div className={styles.multiDayEventsContainer}></div>
      <CalendarWeekDayHeader date={date} />
      {generateTimestamps()}
      <CalendarCells />
    </main>
  );
}

export default CalendarMain;
