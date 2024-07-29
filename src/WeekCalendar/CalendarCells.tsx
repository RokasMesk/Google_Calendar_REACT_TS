import styles from './weekCalendar.module.css';
import { DAYS_IN_WEEK, CELLS_IN_COLUMN } from '../constants';
import { createArray } from '../utils';
import { getCellDateForWeekCalendar } from '../dateUtils';
interface CalendarCellsProps {
  calendarDate: Date;
  openModal: (date: Date) => void;
}

const CalendarCells = ({ calendarDate, openModal }: CalendarCellsProps) => {
  const handleCellClick = (date: Date) => {
    openModal(date);
  };

  return (
    <div className={styles.calendarCells}>
      {createArray(DAYS_IN_WEEK * CELLS_IN_COLUMN).map((_, i) => {
        const cellDate = getCellDateForWeekCalendar(calendarDate, i);
        const key = `${calendarDate.getDate()}-${calendarDate.getHours() + i}`;

        return (
          <div
            className={styles.cell}
            key={key}
            onClick={() => handleCellClick(cellDate)}
          ></div>
        );
      })}
    </div>
  );
};

export default CalendarCells;
