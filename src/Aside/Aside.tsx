import MonthCalendar from './MonthCalendar';
import styles from './aside.module.css';
interface AsideProps {
  calendarDate: Date;
  setCalendarDate: (calendarDate: Date) => void;
  setShowModal: (flag: boolean) => void;
  setInitialDateForModal: (date: Date | null) => void;
}

function Aside({
  calendarDate,
  setCalendarDate,
  setShowModal,
  setInitialDateForModal,
}: AsideProps) {
  const handleCreateEventClick = () => {
    setInitialDateForModal(null);
    setShowModal(true);
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
