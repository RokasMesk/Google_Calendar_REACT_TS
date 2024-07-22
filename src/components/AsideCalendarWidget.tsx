import React, { useState, useEffect } from 'react';
import { isToday } from '../utils';

const TOTAL_CELLS = 42;
interface AsideCalendarWidgetProps {
  date: Date;
}
function AsideCalendarWidget({ date }: AsideCalendarWidgetProps) {
  let displayedMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const [calendarCells, setCalendarCells] = useState<React.ReactNode[]>([]);
  const createDateCell = (day: number, className: string) => {
    return (
      <div className={className} key={`${className}-${day}`}>
        {day}
      </div>
    );
  };
  const renderPreviousMonthDays = (
    startDay: number,
    previousMonthTotalDays: number
  ): React.ReactNode[] => {
    const cells = [];
    for (let i = 0; i < startDay; i++) {
      const day = previousMonthTotalDays - startDay + 1 + i;
      cells.push(createDateCell(day, 'prev-month-day'));
    }
    return cells;
  };

  const renderCurrentMonthDays = (totalDays: number): React.ReactNode[] => {
    const cells = [];
    for (let day = 1; day <= totalDays; day++) {
      const cellDate = new Date(
        displayedMonth.getFullYear(),
        displayedMonth.getMonth(),
        day
      );
      let className = '';
      if (isToday(cellDate)) {
        className = 'today';
      }
      cells.push(createDateCell(day, className));
    }
    return cells;
  };

  const renderNextMonthDays = (renderedCells: number): React.ReactNode[] => {
    const cells = [];
    for (let i = 1; i <= TOTAL_CELLS - renderedCells; i++) {
      cells.push(createDateCell(i, 'next-month-day'));
    }
    return cells;
  };
  const renderMonthDays = (): React.ReactNode[] => {
    const firstDayOfMonth = new Date(
      displayedMonth.getFullYear(),
      displayedMonth.getMonth(),
      1
    );
    let startDay = firstDayOfMonth.getDay();
    if (startDay === 0) {
      startDay = 7;
    }
    const lastDayOfMonth = new Date(
      displayedMonth.getFullYear(),
      displayedMonth.getMonth() + 1,
      0
    );
    const totalDays = lastDayOfMonth.getDate();
    const previousMonthLastDay = new Date(
      displayedMonth.getFullYear(),
      displayedMonth.getMonth(),
      0
    );
    const previousMonthTotalDays = previousMonthLastDay.getDate();

    const previousMonthCells = renderPreviousMonthDays(
      startDay - 1,
      previousMonthTotalDays
    );
    const currentMonthCells = renderCurrentMonthDays(totalDays);
    const nextMonthCells = renderNextMonthDays(startDay + totalDays - 1);

    return [...previousMonthCells, ...currentMonthCells, ...nextMonthCells];
  };
  useEffect(() => {
    setCalendarCells(renderMonthDays());
  }, [date]);
  return (
    <div className="calendar-widget">
      <div className="calendar-widget-header">
        <span
          id="currentDateCalendarWidget"
          className="calendar-widget-current-day"
        >
          {displayedMonth.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
          })}
        </span>
        <div className="calendar-widget-controls-group">
          <button id="prevMonth" className="switch-weeks-widget">
            &lt;
          </button>
          <button id="nextMonth" className="switch-weeks-widget">
            &gt;
          </button>
        </div>
      </div>
      <div className="calendar-widget-days">
        <div>Mo</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>
        <div>Su</div>
      </div>
      <div className="calendar-widget-dates" id="calendarDates">
        {calendarCells}
      </div>
    </div>
  );
}
export default AsideCalendarWidget;
