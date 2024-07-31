import styles from './weekCalendar.module.css';
import { DAYS_IN_WEEK, CELLS_IN_COLUMN } from '../constants';
import { createArray, getEventsForCells } from '../utils';
import { formatKeyForCellsEvents, getCellDateForWeekCalendar } from '../dateUtils';
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
  const eventsMap = getEventsForCells(events);
  return (
    <div className={styles.calendarCells}>
      {createArray(DAYS_IN_WEEK * CELLS_IN_COLUMN).map((_, i) => {
        const cellDate = getCellDateForWeekCalendar(calendarDate, i);
        const key = formatKeyForCellsEvents(cellDate);

        const eventsForCell = eventsMap.get(key) ?? []

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
