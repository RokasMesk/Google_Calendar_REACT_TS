import styles from './weekCalendar.module.css';
import CalendarCells from './CalendarCells';
import CalendarWeekDayHeader from './CalendarWeekDayHeader';
import CalendarTimestamps from './CalendarTimestamps';

interface WeekCalendarProps {
  calendarDate: Date;
}

function WeekCalendar({ calendarDate }: WeekCalendarProps) {
  return (
    <main className={styles.calendarMain}>
      <div className={styles.multiDayEventsContainer}></div>
      <CalendarWeekDayHeader calendarDate={calendarDate} />
      <CalendarTimestamps />
      <CalendarCells calendarDate={calendarDate} />
    </main>
  );
}

export default WeekCalendar;
