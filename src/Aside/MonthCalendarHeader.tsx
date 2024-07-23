import { ArrowLeft, ArrowRight } from '../components/icons';
import styles from './aside.module.css';

interface CalendarHeaderProps {
  date: Date;
}

const MonthCalendarHeader = ({ date }: CalendarHeaderProps) => {
  return (
    <div className={styles.calendarWidgetHeader}>
      <span className={styles.calendarWidgetCurrentYearAndMonth}>
        {date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
        })}
      </span>
      <div className={styles.calendarWidgetControlsGroup}>
        <button className={styles.switchWeeksWidget}>
          <ArrowLeft width={20} height={20} />
        </button>
        <button className={styles.switchWeeksWidget}>
          <ArrowRight width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default MonthCalendarHeader;
