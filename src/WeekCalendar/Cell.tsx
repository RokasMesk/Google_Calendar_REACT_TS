import { Event } from '../types';
import CalendarEvent from './CalendarEvent';
import { useRef } from 'react';
import styles from './weekCalendar.module.css';
import { getEventHeight, getEventWidth, getMarginLeft, getMarginTop } from '../utils';

interface CellProps {
  cellDate: Date;
  onCellClick: (date: Date) => void;
  events: Event[];
}

const Cell = ({ cellDate, onCellClick, events }: CellProps) => {
  const cellRef = useRef<HTMLDivElement>(null);
  const cellWidth = (cellRef.current?.offsetWidth ?? 0) - 10;
  const cellHeight = cellRef.current?.offsetHeight ?? 0;

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

        const eventHeight = getEventHeight(duration , cellHeight);
        const marginTop = getMarginTop(startDateTime, cellHeight);
        const width = getEventWidth(cellWidth, overlappingEventsCount);
        const marginLeft = getMarginLeft(width, overlappingEventsCount);
        return (
          <CalendarEvent
            key={event.id}
            width={width}
            height={eventHeight}
            marginTop={marginTop}
            marginLeft={marginLeft}
            event={event}
          />
        );
      })}
    </div>
  );
};

export default Cell;
