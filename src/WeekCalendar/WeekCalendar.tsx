import styles from './weekCalendar.module.css';
import CalendarCells from './CalendarCells';
import CalendarWeekDayHeader from './CalendarWeekDayHeader';
import CalendarTimestamps from './CalendarTimestamps';
import { Event } from '../types';
import { getMultiDayEventsByWeek, getSingleDayEventsByWeek } from '../utils';
import { formatYearMonthDayForKey } from '../dateUtils';
import MultiDayEventsContainer from './MultiDayEventContainer';

interface WeekCalendarProps {
  calendarDate: Date;
  openModal: (date: Date) => void;
  events: Event[];
}

function WeekCalendar({ calendarDate, openModal, events }: WeekCalendarProps) {
  const singleDayEventsByWeek = getSingleDayEventsByWeek(
    events,
    calendarDate);
  const multiDayEventsByWeek = getMultiDayEventsByWeek(events, calendarDate);
  const weekKey = formatYearMonthDayForKey(calendarDate);
  return (
    <main className={styles.calendarMain}>
      <CalendarWeekDayHeader calendarDate={calendarDate} />
      <MultiDayEventsContainer
        multiDayEvents={multiDayEventsByWeek}
        calendarDate={calendarDate}
      />
      <CalendarTimestamps />
      <CalendarCells
        calendarDate={calendarDate}
        openModal={openModal}
        events={singleDayEventsByWeek[weekKey]}
      />
    </main>
  );
}

export default WeekCalendar;