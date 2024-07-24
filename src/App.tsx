import Header from './Header/Header';
import Aside from './Aside/Aside';
import WeekCalendar from './WeekCalendar/WeekCalendar';
import styles from './index.module.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <div className={styles.appContainer}>
      <Header date={currentDate} setCurrentDate={setCurrentDate} />
      <Aside date={currentDate} setCurrentDate={setCurrentDate} />
      <WeekCalendar date={currentDate} />
    </div>
  );
}

export default App;
