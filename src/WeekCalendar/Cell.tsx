import { Event } from '../types';
import CalendarEvent from './CalendarEvent';
import { useRef, useState, useEffect } from 'react';
import styles from './weekCalendar.module.css';
import {
  getEventHeight,
  getEventWidth,
  getMarginLeft,
  getMarginTop,
} from '../utils';

interface CellProps {
  cellDate: Date;
  onCellClick: (date: Date) => void;
  events: Event[];
}

const Cell = ({ cellDate, onCellClick, events }: CellProps) => {
  const cellRef = useRef<HTMLDivElement>(null);
  const [cellDimensions, setCellDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (cellRef.current) {
      setCellDimensions({
        width: cellRef.current.offsetWidth - 10,
        height: cellRef.current.offsetHeight,
      });
    }
  }, []);

  const { width: cellWidth, height: cellHeight } = cellDimensions;

  return (
    <div
      className={styles.cell}
      onClick={() => onCellClick(cellDate)}
      ref={cellRef}
    >
      {events.map((event, overlappingEventsCount) => {
        const duration =
          event.endDateTime.getTime() - event.startDateTime.getTime();
        const eventHeight = getEventHeight(duration, cellHeight);
        const marginTop = getMarginTop(event.startDateTime, cellHeight);
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
