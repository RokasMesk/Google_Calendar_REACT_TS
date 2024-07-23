import styles from './calendar-main.module.css';

const CalendarCells = () => (
  <div className={styles.calendarCells} id="calendarCells">
    {new Array(7 * 19).fill(undefined).map((_, i) => {
      console.log(i);
      return <div className={styles.cell} key={i}></div>;
    })}
  </div>
);

export default CalendarCells;
