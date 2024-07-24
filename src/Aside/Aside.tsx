import MonthCalendar from './MonthCalendar';
import styles from './aside.module.css';
interface AsideProps {
  date: Date;
  setCurrentDate: (date: Date) => void;
}

function Aside({ date, setCurrentDate }: AsideProps) {
  return (
    <aside className={styles.monthAside}>
      <button className={styles.addEventButton}>Create Event</button>
      <MonthCalendar date={date} setCurrentDate={setCurrentDate} />
    </aside>
  );
}

export default Aside;
