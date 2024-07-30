import styles from './weekCalendar.module.css';
import { DAYS_IN_WEEK, CELLS_IN_COLUMN } from '../constants';
import { createArray, getEventsForCell } from '../utils';
import { getCellDateForWeekCalendar } from '../dateUtils';
import { Event } from '../types';
import Cell from './Cell';

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

  return (
    <div className={styles.calendarCells}>
      {createArray(DAYS_IN_WEEK * CELLS_IN_COLUMN).map((_, i) => {
        const cellDate = getCellDateForWeekCalendar(calendarDate, i);
        const key = `${calendarDate.getDate()}-${calendarDate.getHours() + i}`;

        const eventsForCell = getEventsForCell(cellDate, events);

        return (
          <Cell
            cellDate={cellDate}
            onCellClick={handleCellClick}
            events={eventsForCell}
            key={key}
          />
        );
      })}
    </div>
  );
};

export default CalendarCells;
