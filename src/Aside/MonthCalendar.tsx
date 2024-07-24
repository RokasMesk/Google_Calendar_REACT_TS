import styles from './aside.module.css';
import MonthCalendarHeader from './MonthCalendarHeader';
import DateCells from './DateCells';
import MonthCalendarDayNames from './MonthCalendarDayNames';
import { useState, useEffect } from 'react';
interface MonthCalendarProps {
  date: Date;
  setCurrentDate: (date: Date) => void;
}
function MonthCalendar({ date, setCurrentDate }: MonthCalendarProps) {
  const [displayedMonth, setDisplayedMonth] = useState(
    new Date(date.getFullYear(), date.getMonth(), 1)
  );

  useEffect(() => {
    setDisplayedMonth(new Date(date.getFullYear(), date.getMonth(), 1));
  }, [date]);

  const handlePrevMonth = () => {
    setDisplayedMonth(
      new Date(displayedMonth.getFullYear(), displayedMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setDisplayedMonth(
      new Date(displayedMonth.getFullYear(), displayedMonth.getMonth() + 1, 1)
    );
  };

  return (
    <div className={styles.calendarWidget}>
      <MonthCalendarHeader
        date={displayedMonth}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />
      <MonthCalendarDayNames />
      <DateCells date={displayedMonth} setCurrentDate={setCurrentDate} />
    </div>
  );
}
export default MonthCalendar;
