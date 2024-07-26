import Header from './Header/Header';
import Aside from './Aside/Aside';
import WeekCalendar from './WeekCalendar/WeekCalendar';
import styles from './index.module.css';
import { useState } from 'react';
import CreateEventModal from './Modal/CreateEventModal';

function App() {
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialDateForModal, setInitialDateForModal] = useState(new Date());
  const openModal = (date: Date) => {
    setInitialDateForModal(date);
    setIsModalOpen(true);
  };
  return (
    <div className={styles.appContainer}>
      <Header calendarDate={calendarDate} setCalendarDate={setCalendarDate} />
      <Aside
        calendarDate={calendarDate}
        setCalendarDate={setCalendarDate}
        openModal={openModal}
      />
      <WeekCalendar calendarDate={calendarDate} openModal={openModal} />
      <CreateEventModal
        isOpen={isModalOpen}
        closeModal={setIsModalOpen}
        date={initialDateForModal}
      />
    </div>
  );
}

export default App;
