import styles from './weekCalendar.module.css';
import CalendarCells from './CalendarCells';
import CalendarWeekDayHeader from './CalendarWeekDayHeader';
import CalendarTimestamps from './CalendarTimestamps';
import { Event } from '../types';

interface WeekCalendarProps {
  calendarDate: Date;
  openModal: (date: Date) => void;
  events: Event[];
}

function WeekCalendar({ calendarDate, openModal, events }: WeekCalendarProps) {

 // const [multi, single] = getEvents()


  return (
    <main className={styles.calendarMain}>
      <div className={styles.multiDayEventsContainer}></div>
      {/* <SingleDayEventsContainer  events={events} date={calendarDate}/> */}
      
      <CalendarWeekDayHeader calendarDate={calendarDate} />
      <CalendarTimestamps />
      <CalendarCells calendarDate={calendarDate} openModal={openModal} events={events}/>
    </main>
  );
}

export default WeekCalendar;

// [[single], [multi]]
// [{
//   '2024-07-29': []



// }, {}]

//Record<string for week starting on this day, event[]>