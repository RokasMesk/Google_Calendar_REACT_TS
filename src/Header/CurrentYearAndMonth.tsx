import { getFormattedDate } from '../dateUtils';
import styles from './header.module.css';

interface CurrentYearAndMonthProps {
  calendarDate: Date;
}

const CurrentYearAndMonth = ({ calendarDate }: CurrentYearAndMonthProps) => {
  return (
    <span className={styles.currentMonth}>
      {getFormattedDate(calendarDate)}
    </span>
  );
};

export default CurrentYearAndMonth;
