import styles from './weekCalendar.module.css';
import CalendarCells from './CalendarCells';
import CalendarWeekDayHeader from './CalendarWeekDayHeader';
import CalendarTimestamps from './CalendarTimestamps';

interface WeekCalendarProps {
  date: Date;
}

function WeekCalendar({ date }: WeekCalendarProps) {
  return (
    <main className={styles.calendarMain}>
      <div className={styles.multiDayEventsContainer}></div>
      <CalendarWeekDayHeader date={date} />
      <CalendarTimestamps />
      <CalendarCells />
    </main>
  );
}

export default WeekCalendar;
