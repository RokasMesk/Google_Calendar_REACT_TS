import styles from './aside.module.css';
import MonthCalendarHeader from './MonthCalendarHeader';
import DateCells from './DateCells';
import MonthCalendarDayNames from './MonthCalendarDayNames';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setCalendarDate } from '../store';

function MonthCalendar() {
  const dispatch = useDispatch();
  const calendarDate = useSelector(
    (state: RootState) => state.calendar.calendarDate
  );
  const handleSetCalendarDate = (date: Date) => {
    dispatch(setCalendarDate(date));
  };
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
        setCalendarDate={handleSetCalendarDate}
      />
    </div>
  );
}
export default MonthCalendar;
