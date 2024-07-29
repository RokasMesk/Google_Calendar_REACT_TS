import styles from './weekCalendar.module.css';
import { DAYS_IN_WEEK, CELLS_IN_COLUMN } from '../constants';
import { createArray } from '../utils';
import { getCellDateForWeekCalendar, getStartOfWeek } from '../dateUtils';
import { Event } from '../types';
import Eventukas from './Eventukas';
interface CalendarCellsProps {
  calendarDate: Date;
  openModal: (date: Date) => void;
  events:Event[];
}

const CalendarCells = ({ calendarDate, openModal, events }: CalendarCellsProps) => {
  const handleCellClick = (date: Date) => {
    openModal(date);
    console.log(events);
  };
  const startOfWeek = getStartOfWeek(calendarDate);
  console.log(startOfWeek);
  return (
    <div className={styles.calendarCells} id='calendarCells'>
      {createArray(DAYS_IN_WEEK * CELLS_IN_COLUMN).map((_, i) => {
        const cellDate = getCellDateForWeekCalendar(calendarDate, i);
        const key = `${calendarDate.getDate()}-${calendarDate.getHours() + i}`;


        return (
          <div
            className={styles.cell}
            key={key}
            onClick={() => handleCellClick(cellDate)}
          >
            <Eventukas />
          </div>
        );
      })}
    </div>
  );
};

export default CalendarCells;
