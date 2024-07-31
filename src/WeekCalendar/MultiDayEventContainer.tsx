import { Event } from '../types';
import styles from './weekCalendar.module.css';
import MultiDayEvent from './MultiDayEvent';
import { getEventIndices } from '../utils';
interface MultiDayEventContainerProps {
  calendarDate: Date;
  multiDayEvents: Event[];
}

const MultiDayEventsContainer = ({
  calendarDate,
  multiDayEvents,
}: MultiDayEventContainerProps) => {
  return (
    <div className={styles.multiDayEventsContainer}>
      {multiDayEvents.map((event) => {
        const { startDayIndex, endDayIndex } = getEventIndices(
          event,
          calendarDate
        );
        return (
          <MultiDayEvent
            key={event.id}
            event={event}
            startDayIndex={startDayIndex}
            endDayIndex={endDayIndex}
          />
        );
      })}
    </div>
  );
};

export default MultiDayEventsContainer;