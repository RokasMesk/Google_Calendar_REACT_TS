import { Event } from '../types';
import CalendarEvent from './CalendarEvent';
import { useRef } from 'react';
import styles from './weekCalendar.module.css';
import { MILLISECONDS } from '../constants';

interface CellProps {
  cellDate: Date;
  onCellClick: (date: Date) => void;
  events: Event[];
}

const Cell = ({ cellDate, onCellClick, events }: CellProps) => {
  const cellRef = useRef<HTMLDivElement>(null);
  const cellWidth = (cellRef.current?.offsetWidth ?? 0) - 10;
  const cellHeight = cellRef.current?.offsetHeight;

  return (
    <div
      className={styles.cell}
      onClick={() => onCellClick(cellDate)}
      ref={cellRef}
    >
      {events?.map((event, overlappingEventsCount) => {
        const startDateTime = new Date(event.startDateTime);
        const endDateTime = new Date(event.endDateTime);
        const duration = endDateTime.getTime() - startDateTime.getTime();

        const eventHeight = (duration / MILLISECONDS) * (cellHeight ?? 0);
        const marginTop = (startDateTime.getMinutes() / 60) * (cellHeight ?? 0);

        return (
          <CalendarEvent
            key={event.id}
            width={cellWidth / (overlappingEventsCount + 1)}
            height={eventHeight}
            marginTop={marginTop}
            marginLeft={(cellWidth / (overlappingEventsCount + 1)) * overlappingEventsCount}
            event={event}
          />
        );
      })}
    </div>
  );
};

export default Cell;
