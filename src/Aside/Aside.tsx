import MonthCalendar from './MonthCalendar';
import styles from './aside.module.css';
interface AsideProps {
  calendarDate: Date;
  setCalendarDate: (calendarDate: Date) => void;
  openModal: (date: Date) => void;
}

function Aside({ calendarDate, setCalendarDate, openModal }: AsideProps) {
  const handleCreateEventClick = () => {
    openModal(new Date());
  };
  return (
    <aside className={styles.monthAside}>
      <button
        className={styles.addEventButton}
        onClick={handleCreateEventClick}
      >
        Create Event
      </button>
      <MonthCalendar
        calendarDate={calendarDate}
        setCalendarDate={setCalendarDate}
      />
    </aside>
  );
}

export default Aside;
