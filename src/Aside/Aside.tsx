import { useState } from 'react';
import MonthCalendar from './MonthCalendar';
import styles from './aside.module.css';
import CreateEventModal from '../Modal/CreateEventModal';
interface AsideProps {
  calendarDate: Date;
  setCalendarDate: (calendarDate: Date) => void;
}

function Aside({ calendarDate, setCalendarDate }: AsideProps) {
  const [showModal, setShowModal] = useState(false);
  const handleCreateEventClick = () => {
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
      <CreateEventModal showModal={showModal} setShowModal={setShowModal} />
    </aside>
  );
}

export default Aside;
