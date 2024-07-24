import { ArrowLeft, ArrowRight } from '../components/icons';
import { getFormattedDate } from '../dateUtils';
import styles from './aside.module.css';

interface CalendarHeaderProps {
  date: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const MonthCalendarHeader = ({
  date,
  onPrevMonth,
  onNextMonth,
}: CalendarHeaderProps) => {
  return (
    <div className={styles.calendarWidgetHeader}>
      <span className={styles.calendarWidgetCurrentYearAndMonth}>
        {getFormattedDate(date)}
      </span>
      <div className={styles.calendarWidgetControlsGroup}>
        <button className={styles.switchWeeksWidget} onClick={onPrevMonth}>
          <ArrowLeft width={20} height={20} />
        </button>
        <button className={styles.switchWeeksWidget} onClick={onNextMonth}>
          <ArrowRight width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default MonthCalendarHeader;
