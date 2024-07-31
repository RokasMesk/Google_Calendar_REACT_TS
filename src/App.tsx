import Header from './Header/Header';
import Aside from './Aside/Aside';
import WeekCalendar from './WeekCalendar/WeekCalendar';
import styles from './index.module.css';
import { useState } from 'react';
import CreateEventModal from './Modal/CreateEventModal';
import { getEventsFromServer } from './services';
import { Event } from './types';
import { useEffect } from 'react';

function App() {
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialDateForModal, setInitialDateForModal] = useState(new Date());
  const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
    const fetchEvents = async () => {
      const fetchedEvents = await getEventsFromServer();
      setEvents(fetchedEvents);
    };

    fetchEvents();
  }, []);

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
      <WeekCalendar calendarDate={calendarDate} openModal={openModal} events={events} />
      <CreateEventModal
        isOpen={isModalOpen}
        closeModal={setIsModalOpen}
        date={initialDateForModal}
        events={events}
        setEvents={setEvents}
      />
    </div>
  );
}

export default App;
