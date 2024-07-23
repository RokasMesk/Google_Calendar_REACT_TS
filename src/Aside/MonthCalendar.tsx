import styles from './aside.module.css';
import MonthCalendarHeader from './MonthCalendarHeader';
import DateCells from './DateCells';
import MonthCalendarDayNames from './MonthCalendarDayNames';
interface MonthCalendarProps {
  date: Date;
}
function MonthCalendar({ date }: MonthCalendarProps) {
  return (
    <div className={styles.calendarWidget}>
      <MonthCalendarHeader date={date} />
      <MonthCalendarDayNames />
      <DateCells date={date} />
    </div>
  );
}
export default MonthCalendar;
