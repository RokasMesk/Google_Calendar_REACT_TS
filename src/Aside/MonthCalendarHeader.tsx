import styles from './aside.module.css';

interface CalendarHeaderProps {
  date: Date;
}

const MonthCalendarHeader = ({ date }: CalendarHeaderProps) => {
  return (
    <div className={styles.calendarWidgetHeader}>
      <span
        id="currentDateCalendarWidget"
        className={styles.calendarWidgetCurrentDay}
      >
        {date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
        })}
      </span>
      <div className="calendar-widget-controls-group">
        <button id="prevMonth" className={styles.switchWeeksWidget}>
          &lt;
        </button>
        <button id="nextMonth" className={styles.switchWeeksWidget}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default MonthCalendarHeader;
