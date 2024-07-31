import { Event } from '../types';
import styles from './weekCalendar.module.css';

interface CalendarEventProps {
  width: number | undefined;
  height: number | undefined;
  marginTop: number | undefined;
  marginLeft: number | undefined;
  event: Event;
}

const CalendarEvent = ({
  width,
  height,
  marginTop,
  marginLeft,
  event,
}: CalendarEventProps) => {
  return (
    <div
      className={styles.calendarEvent}
      style={{
        width: width,
        height: height,
        marginTop: marginTop,
        marginLeft: marginLeft,
      }}
    >
      {event.eventTitle}
    </div>
  );
};

export default CalendarEvent;
