import styles from './weekCalendar.module.css';
import CalendarCells from './CalendarCells';
import CalendarWeekDayHeader from './CalendarWeekDayHeader';
import CalendarTimestamps from './CalendarTimestamps';

interface WeekCalendarProps {
  calendarDate: Date;
  openModal: (date: Date) => void;
}

function WeekCalendar({ calendarDate, openModal }: WeekCalendarProps) {
  return (
    <main className={styles.calendarMain}>
      <div className={styles.multiDayEventsContainer}></div>
      <CalendarWeekDayHeader calendarDate={calendarDate} />
      <CalendarTimestamps />
      <CalendarCells calendarDate={calendarDate} openModal={openModal} />
    </main>
  );
}

export default WeekCalendar;
