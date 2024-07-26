import styles from './weekCalendar.module.css';
import CalendarCells from './CalendarCells';
import CalendarWeekDayHeader from './CalendarWeekDayHeader';
import CalendarTimestamps from './CalendarTimestamps';

interface WeekCalendarProps {
  calendarDate: Date;
  setInitialDateForModal: (date: Date | null) => void;
  setShowModal: (flag: boolean) => void;
}

function WeekCalendar({
  calendarDate,
  setInitialDateForModal,
  setShowModal,
}: WeekCalendarProps) {
  return (
    <main className={styles.calendarMain}>
      <div className={styles.multiDayEventsContainer}></div>
      <CalendarWeekDayHeader calendarDate={calendarDate} />
      <CalendarTimestamps />
      <CalendarCells
        calendarDate={calendarDate}
        setInitialDateForModal={setInitialDateForModal}
        setShowModal={setShowModal}
      />
    </main>
  );
}

export default WeekCalendar;
