import React, { ReactNode } from 'react';
import '../styles/calendar-main.css';
import { getFirstDayOfTheWeek, isToday } from '../utils';
interface CalendarMainProps {
  date: Date;
}
const renderWeekHeader = (date: Date): ReactNode[] => {
  const weekHeaderDays = [];
  weekHeaderDays.push(<div className="day-name" key="empty"></div>);

  const startOfWeek = getFirstDayOfTheWeek(date);
  for (let i = 0; i < 7; i++) {
    const day = new Date(startOfWeek);
    day.setDate(day.getDate() + i);
    const dayName = day.toLocaleDateString('en-US', { weekday: 'short' });

    weekHeaderDays.push(
      <div className={`day ${isToday(day) ? 'current-day' : ''}`} key={i}>
        <span className="day-name">{dayName}</span>
        <span className="day-number">{day.getDate()}</span>
      </div>
    );
  }
  return weekHeaderDays;
};
const renderCalendarCells = (): ReactNode[] => {
  const cellsInOneColumn = 19;
  const daysInWeek = 7;
  const cells = [];
  for (let i = 0; i < cellsInOneColumn * daysInWeek; i++) {
    cells.push(<div className="cell" key={i}></div>);
  }
  return cells;
};
function CalendarMain({ date }: CalendarMainProps) {
  const calendarCells = renderCalendarCells();
  const weekHeaderDays = renderWeekHeader(date);
  return (
    <main className="calendar-main">
      <div className="week-header">{weekHeaderDays}</div>
      <div className="multi-day-events-container"></div>
      <div className="time-column">
        <div className="timestamp">5:00 AM</div>
        <div className="timestamp">6:00 AM</div>
        <div className="timestamp">7:00 AM</div>
        <div className="timestamp">8:00 AM</div>
        <div className="timestamp">9:00 AM</div>
        <div className="timestamp">10:00 AM</div>
        <div className="timestamp">11:00 AM</div>
        <div className="timestamp">12:00 PM</div>
        <div className="timestamp">1:00 PM</div>
        <div className="timestamp">2:00 PM</div>
        <div className="timestamp">3:00 PM</div>
        <div className="timestamp">4:00 PM</div>
        <div className="timestamp">5:00 PM</div>
        <div className="timestamp">6:00 PM</div>
        <div className="timestamp">7:00 PM</div>
        <div className="timestamp">8:00 PM</div>
        <div className="timestamp">9:00 PM</div>
        <div className="timestamp">10:00 PM</div>
        <div className="timestamp">11:00 PM</div>
      </div>
      <div className="calendar-cells" id="calendarCells">
        {calendarCells}
      </div>
    </main>
  );
}

export default CalendarMain;
