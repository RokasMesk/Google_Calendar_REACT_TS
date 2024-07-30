import styles from './weekCalendar.module.css';
import CalendarCells from './CalendarCells';
import CalendarWeekDayHeader from './CalendarWeekDayHeader';
import CalendarTimestamps from './CalendarTimestamps';
import { Event } from '../types';
import { formatYearMonthDayForKey, groupEventsByWeek } from '../utils';
import { getStartOfWeek } from '../dateUtils';

interface WeekCalendarProps {
  calendarDate: Date;
  openModal: (date: Date) => void;
  events: Event[];
}

function WeekCalendar({ calendarDate, openModal, events }: WeekCalendarProps) {
  const groupedEvents = groupEventsByWeek(events);
  return (
    <main className={styles.calendarMain}>
      <div className={styles.multiDayEventsContainer}></div>

      <CalendarWeekDayHeader calendarDate={calendarDate} />
      <CalendarTimestamps />
      <CalendarCells
        calendarDate={calendarDate}
        openModal={openModal}
        events={
          groupedEvents[formatYearMonthDayForKey(getStartOfWeek(calendarDate))]
        }
      />
    </main>
  );
}

export default WeekCalendar;
