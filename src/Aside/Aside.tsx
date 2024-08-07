import MonthCalendar from './MonthCalendar';
import styles from './aside.module.css';
import { useDispatch } from 'react-redux';
import { openModal } from '../store';

function Aside({}) {
  const dispatch = useDispatch();
  const handleCreateEventClick = () => {
    dispatch(openModal(new Date()));
  };
  return (
    <aside className={styles.monthAside}>
      <button
        className={styles.addEventButton}
        onClick={handleCreateEventClick}
      >
        Create Event
      </button>
      <MonthCalendar />
    </aside>
  );
}

export default Aside;
