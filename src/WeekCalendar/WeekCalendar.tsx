import styles from './weekCalendar.module.css';
import CalendarCells from './CalendarCells';
import CalendarWeekDayHeader from './CalendarWeekDayHeader';
import CalendarTimestamps from './CalendarTimestamps';
import { getMultiDayEventsByWeek, getSingleDayEventsByWeek } from '../utils';
import { formatYearMonthDayForKey } from '../dateUtils';
import MultiDayEventsContainer from './MultiDayEventContainer';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, fetchEvents, AppDispatch } from '../store';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

function WeekCalendar() {
  const calendarDate = useSelector(
    (state: RootState) => state.calendar.calendarDate
  );
  const events = useSelector((state: RootState) => state.events.events);
  const status = useSelector((state: RootState) => state.events.status);
  const error = useSelector((state: RootState) => state.events.error);
  const dispatch = useDispatch<AppDispatch>();
  const handleRetryClick = () => {
    dispatch(fetchEvents());
  };
  switch (status) {
    case 'loading':
      return <LoadingSpinner />;
    case 'failed':
      return (
        <ErrorMessage
          errorMessage={error ?? 'Something went wrong'}
          handleClick={handleRetryClick}
        />
      );
    default:
  }
  const singleDayEventsByWeek = getSingleDayEventsByWeek(events, calendarDate);
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
        events={singleDayEventsByWeek[weekKey]}
      />
    </main>
  );
}

export default WeekCalendar;
