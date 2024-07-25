import styles from './weekCalendar.module.css';
import { DAYS_IN_WEEK, CELLS_IN_COLUMN } from '../constants';
import { createArray } from '../utils';

const CalendarCells = () => (
  <div className={styles.calendarCells}>
    {createArray(DAYS_IN_WEEK * CELLS_IN_COLUMN).map((_, i) => {
      const day = Math.floor(i / CELLS_IN_COLUMN);
      const hour = i % CELLS_IN_COLUMN;
      const key = `${day}-${hour}`;
      return <div className={styles.cell} key={key}></div>;
    })}
  </div>
);

export default CalendarCells;
