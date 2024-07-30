import styles from './weekCalendar.module.css';
import { DAYS_IN_WEEK, CELLS_IN_COLUMN } from '../constants';
import { createArray } from '../utils';
import { getCellDateForWeekCalendar, getStartOfWeek } from '../dateUtils';
import { Event } from '../types';
import { useRef } from 'react';
import CalendarEvent from './CalendarEvent';

interface CalendarCellsProps {
  calendarDate: Date;
  openModal: (date: Date) => void;
  events: Event[];
}

const CalendarCells = ({
  calendarDate,
  openModal,
  events,
}: CalendarCellsProps) => {
  const handleCellClick = (date: Date) => {
    openModal(date);
  };

  const cellRef = useRef<HTMLDivElement>(null);

  const cellWidth = (cellRef.current?.offsetWidth ?? 0) - 10;
  const cellHeight = cellRef.current?.offsetHeight;

  return (
    <div className={styles.calendarCells} id="calendarCells">
      {createArray(DAYS_IN_WEEK * CELLS_IN_COLUMN).map((_, i) => {
        const cellDate = getCellDateForWeekCalendar(calendarDate, i);
        const key = `${calendarDate.getDate()}-${calendarDate.getHours() + i}`;

        return (
          <div
            className={styles.cell}
            key={key}
            onClick={() => handleCellClick(cellDate)}
            ref={cellRef}
          >
            <CalendarEvent
              cellWidth={cellWidth}
              cellHeight={cellHeight}
              events={events ?? []}
              cellDate={cellDate}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CalendarCells;
