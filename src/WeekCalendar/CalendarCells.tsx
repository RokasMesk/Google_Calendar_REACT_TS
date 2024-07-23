import styles from './weekCalendar.module.css';
import { DAYS_IN_WEEK, CELLS_IN_COLUMN } from '../constants';
import { createArray } from '../utils';
const CalendarCells = () => (
  <div className={styles.calendarCells}>
    {createArray(DAYS_IN_WEEK * CELLS_IN_COLUMN).map((_, i) => {
      return <div className={styles.cell} key={i}></div>;
    })}
  </div>
);

export default CalendarCells;
