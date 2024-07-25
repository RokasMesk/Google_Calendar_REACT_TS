import styles from './aside.module.css';
import MonthCalendarHeader from './MonthCalendarHeader';
import DateCells from './DateCells';
import MonthCalendarDayNames from './MonthCalendarDayNames';
import { useState, useEffect } from 'react';
interface MonthCalendarProps {
  calendarDate: Date;
  setCalendarDate: (date: Date) => void;
}
function MonthCalendar({ calendarDate, setCalendarDate }: MonthCalendarProps) {
  const [displayedMonth, setDisplayedMonth] = useState(
    new Date(
      calendarDate.getFullYear(),
      calendarDate.getMonth(),
      calendarDate.getDate()
    )
  );

  useEffect(() => {
    setDisplayedMonth(new Date(calendarDate));
  }, [calendarDate]);

  return (
    <div className={styles.calendarWidget}>
      <MonthCalendarHeader
        displayedMonthDate={displayedMonth}
        setDisplayedMonth={setDisplayedMonth}
      />
      <MonthCalendarDayNames />
      <DateCells
        calendarDate={displayedMonth}
        setCalendarDate={setCalendarDate}
      />
    </div>
  );
}
export default MonthCalendar;
