import styles from './weekCalendar.module.css';
import CalendarCells from './CalendarCells';
import CalendarWeekDayHeader from './CalendarWeekDayHeader';
import CalendarTimestamps from './CalendarTimestamps';
import { Event } from '../types';
import { formatYearMonthDayForKey, getEventsByWeek } from '../utils';

interface WeekCalendarProps {
  calendarDate: Date;
  openModal: (date: Date) => void;
  events: Event[];
}

function WeekCalendar({ calendarDate, openModal, events }: WeekCalendarProps) {
  const eventsByWeek = getEventsByWeek(events);
  const weekKey = formatYearMonthDayForKey(calendarDate)
  return (
    <main className={styles.calendarMain}>
      <div className={styles.multiDayEventsContainer}></div>

      <CalendarWeekDayHeader calendarDate={calendarDate} />
      <CalendarTimestamps />
      <CalendarCells
        calendarDate={calendarDate}
        openModal={openModal}
        events={
          eventsByWeek[weekKey]
        }
      />
    </main>
  );
}

export default WeekCalendar;
