import { useState } from 'react';
import styles from './weekCalendar.module.css';
import { DAYS_IN_WEEK, CELLS_IN_COLUMN } from '../constants';
import { createArray } from '../utils';
import { calculateCellDate, getFirstDayOfTheWeek } from '../dateUtils';
import CreateEventModal from '../Modal/CreateEventModal';

interface CalendarCellsProps {
  calendarDate: Date;
}

const CalendarCells = ({ calendarDate }: CalendarCellsProps) => {
  const [showModal, setShowModal] = useState(false);
  const [cellDate, setCellDate] = useState<Date | null>(null);

  const handleCellClick = (date: Date) => {
    setCellDate(date);
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
      <CreateEventModal
        showModal={showModal}
        setShowModal={setShowModal}
        initialDate={cellDate}
      />
    </div>
  );
};

export default CalendarCells;
