import MonthCalendar from './MonthCalendar';
import styles from './aside.module.css';
interface AsideProps {
  date: Date;
}

function Aside({ date }: AsideProps) {
  return (
    <aside className={styles.monthAside}>
      <button className={styles.addEventButton} id="addEventButton">
        Create Event
      </button>
      <MonthCalendar date={date} />
    </aside>
  );
}

export default Aside;
