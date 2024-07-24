import { ArrowLeft, ArrowRight } from '../components/icons';
import { getFormattedDate } from '../dateUtils';
import styles from './aside.module.css';

interface CalendarHeaderProps {
  displayedMonthDate: Date;
  setDisplayedMonth: any;
}

const MonthCalendarHeader = ({
  displayedMonthDate,
  setDisplayedMonth,
}: CalendarHeaderProps) => {
  const handlePreviousMonth = () => {
    setDisplayedMonth(
      new Date(
        displayedMonthDate.getFullYear(),
        displayedMonthDate.getMonth() - 1,
        1
      )
    );
  };

  const handleNextMonth = () => {
    setDisplayedMonth(
      new Date(
        displayedMonthDate.getFullYear(),
        displayedMonthDate.getMonth() + 1,
        1
      )
    );
  };

  return (
    <div className={styles.calendarWidgetHeader}>
      <span className={styles.calendarWidgetCurrentYearAndMonth}>
        {getFormattedDate(displayedMonthDate)}
      </span>
      <div className={styles.calendarWidgetControlsGroup}>
        <button
          className={styles.switchWeeksWidget}
          onClick={handlePreviousMonth}
        >
          <ArrowLeft width={20} height={20} />
        </button>
        <button className={styles.switchWeeksWidget} onClick={handleNextMonth}>
          <ArrowRight width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default MonthCalendarHeader;
