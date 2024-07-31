import { Event } from '../types';
import styles from './weekCalendar.module.css';
interface MultiDayEventProps {
  event: Event;
  startDayIndex: number;
  endDayIndex: number;
}

export const MultiDayEvent = ({
  event,
  startDayIndex,
  endDayIndex,
}: MultiDayEventProps) => {
  return (
    <div
      className={styles.multiDayEvent}
      style={{ gridColumn: `${startDayIndex} / ${endDayIndex + 1}` }}
    >
      <strong>{event.eventTitle}</strong>
    </div>
  );
};
export default MultiDayEvent;
