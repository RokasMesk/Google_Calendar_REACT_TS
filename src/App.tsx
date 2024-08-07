import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './Header/Header';
import Aside from './Aside/Aside';
import WeekCalendar from './WeekCalendar/WeekCalendar';
import styles from './index.module.css';
import CreateEventModal from './Modal/CreateEventModal';
import { AppDispatch, fetchEvents } from './store';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <div className={styles.appContainer}>
      <Header />
      <Aside />
      <WeekCalendar />
      <CreateEventModal />
    </div>
  );
}

export default App;
