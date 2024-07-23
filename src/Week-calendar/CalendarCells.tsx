import styles from './week-calendar.module.css';

const CalendarCells = () => (
  <div className={styles.calendarCells} id="calendarCells">
    {new Array(7 * 19).fill(undefined).map((_, i) => {
      return <div className={styles.cell} key={i}></div>;
    })}
  </div>
);

export default CalendarCells;
