import styles from './weekCalendar.module.css';
import { DAYS_IN_WEEK, CELLS_IN_COLUMN } from '../constants';
import { createArray } from '../utils';
import { calculateCellDate } from '../dateUtils';
interface CalendarCellsProps {
  calendarDate: Date;
  setInitialDateForModal: (date: Date | null) => void;
  setShowModal: (flag: boolean) => void;
}

const CalendarCells = ({
  calendarDate,
  setInitialDateForModal,
  setShowModal,
}: CalendarCellsProps) => {
  const handleCellClick = (date: Date) => {
    setInitialDateForModal(date);
    setShowModal(true);
  };

  return (
    <div className={styles.calendarCells}>
      {createArray(DAYS_IN_WEEK * CELLS_IN_COLUMN).map((_, i) => {
        const cellDate = calculateCellDate(calendarDate, i);
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
