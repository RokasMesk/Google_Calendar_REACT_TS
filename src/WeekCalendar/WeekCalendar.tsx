import styles from './weekCalendar.module.css';
import CalendarCells from './CalendarCells';
import CalendarWeekDayHeader from './CalendarWeekDayHeader';
import CalendarTimestamps from './CalendarTimestamps';
import { Event } from '../types';
import { getEventsByWeek } from '../utils';
import { formatYearMonthDayForKey } from '../dateUtils';
import MultiDayEventsContainer from './MultiDayEventContainer';

interface WeekCalendarProps {
  calendarDate: Date;
  openModal: (date: Date) => void;
  events: Event[];
}

function WeekCalendar({ calendarDate, openModal, events }: WeekCalendarProps) {
  const [multiDayEventsForWeek, eventsByWeek] = getEventsByWeek(
    events,
    calendarDate
  );
  const weekKey = formatYearMonthDayForKey(calendarDate);
  return (
    <main className={styles.calendarMain}>
      <CalendarWeekDayHeader calendarDate={calendarDate} />
      <MultiDayEventsContainer
        multiDayEvents={multiDayEventsForWeek}
        calendarDate={calendarDate}
      />
      <CalendarTimestamps />
      <CalendarCells
        calendarDate={calendarDate}
        openModal={openModal}
        events={eventsByWeek[weekKey]}
      />
    </main>
  );
}

export default WeekCalendar;