import React from 'react';
import Header from './components/Header';
import Aside from './components/Aside';
import CalendarMain from './components/CalendarMain';
import { useState } from 'react';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const handleDateChange = (newDate: Date) => {
    setCurrentDate(newDate);
  };
  return (
    <div className="app-container">
      <Header onDateChange={handleDateChange} date={currentDate}></Header>
      <Aside date={currentDate}></Aside>
      <CalendarMain date={currentDate}></CalendarMain>
    </div>
  );
}

export default App;
