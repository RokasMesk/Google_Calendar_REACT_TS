import { getFormattedDate } from '../dateUtils';
import styles from './header.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const CurrentYearAndMonth = () => {
  const calendarDate = useSelector(
    (state: RootState) => state.calendar.calendarDate
  );
  return (
    <span className={styles.currentMonth}>
      {getFormattedDate(calendarDate)}
    </span>
  );
};

export default CurrentYearAndMonth;
