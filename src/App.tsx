import Header from './Header/Header';
import Aside from './Aside/Aside';
import WeekCalendar from './WeekCalendar/WeekCalendar';
import styles from './index.module.css';
import { useState } from 'react';
import CreateEventModal from './Modal/CreateEventModal';

function App() {
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialDateForModal, setInitialDateForModal] = useState<Date | null>(
    null
  );
  return (
    <div className={styles.appContainer}>
      <Header calendarDate={calendarDate} setCalendarDate={setCalendarDate} />
      <Aside
        calendarDate={calendarDate}
        setCalendarDate={setCalendarDate}
        setShowModal={setIsModalOpen}
        setInitialDateForModal={setInitialDateForModal}
      />
      <WeekCalendar
        calendarDate={calendarDate}
        setInitialDateForModal={setInitialDateForModal}
        setShowModal={setIsModalOpen}
      />
      <CreateEventModal
        showModal={isModalOpen}
        setShowModal={setIsModalOpen}
        initialDate={initialDateForModal}
      ></CreateEventModal>
    </div>
  );
}

export default App;
