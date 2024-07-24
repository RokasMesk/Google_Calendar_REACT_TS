import { getFormattedDate } from '../dateUtils';
import styles from './header.module.css';

interface CurrentYearAndMonthProps {
  date: Date;
}

const CurrentYearAndMonth = ({ date }: CurrentYearAndMonthProps) => {
  return <span className={styles.currentMonth}>{getFormattedDate(date)}</span>;
};

export default CurrentYearAndMonth;
