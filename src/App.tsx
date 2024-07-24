import Header from './Header/Header';
import Aside from './Aside/Aside';
import WeekCalendar from './WeekCalendar/WeekCalendar';
import styles from './index.module.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [calendarDate, setCalendarDate] = useState(new Date());
  return (
    <div className={styles.appContainer}>
      <Header calendarDate={calendarDate} setCalendarDate={setCalendarDate} />
      <Aside calendarDate={calendarDate} setCalendarDate={setCalendarDate} />
      <WeekCalendar calendarDate={calendarDate} />
    </div>
  );
}

export default App;
