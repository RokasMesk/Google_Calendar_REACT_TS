import styles from './aside.module.css';
import MonthCalendarHeader from './MonthCalendarHeader';
import DateCells from './DateCells';
import DayNames from './MonthCalendarDayNames';
interface MonthCalendarProps {
  date: Date;
}
function MonthCalendar({ date }: MonthCalendarProps) {
  return (
    <div className={styles.calendarWidget}>
      <MonthCalendarHeader date={date} />
      <DayNames />
      <DateCells date={date} />
    </div>
  );
}
export default MonthCalendar;
