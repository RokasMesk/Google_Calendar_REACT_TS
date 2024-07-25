import MonthCalendar from './MonthCalendar';
import styles from './aside.module.css';
interface AsideProps {
  calendarDate: Date;
  setCalendarDate: (calendarDate: Date) => void;
}

function Aside({ calendarDate, setCalendarDate }: AsideProps) {
  return (
    <aside className={styles.monthAside}>
      <button className={styles.addEventButton}>Create Event</button>
      <MonthCalendar
        calendarDate={calendarDate}
        setCalendarDate={setCalendarDate}
      />
    </aside>
  );
}

export default Aside;
