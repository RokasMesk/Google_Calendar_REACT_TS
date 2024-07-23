import styles from './aside.module.css';

const DayNames = () => {
  return (
    <div className={styles.calendarWidgetDays}>
      <div>Mo</div>
      <div>Tu</div>
      <div>We</div>
      <div>Th</div>
      <div>Fr</div>
      <div>Sa</div>
      <div>Su</div>
    </div>
  );
};

export default DayNames;
