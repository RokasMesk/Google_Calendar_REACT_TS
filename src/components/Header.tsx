import React from 'react';
import '../styles/header.css';
interface HeaderProps {
  onDateChange: (date: Date) => void;
  date: Date;
}
function Header({ onDateChange, date }: HeaderProps) {
  return (
    <header className="calendar-header">
      <div className="header-part">
        <div className="header-group-controls">
          <button className="header-button no-border svg">
            <svg
              fill="#000000"
              width="36px"
              height="36px"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1920 1468.412v112.94H0v-112.94h1920Zm0-564.706v112.941H0V903.706h1920ZM1920 339v112.941H0V339h1920Z"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <span className="calendar-title">Calendar</span>
        </div>
        <div className="header-group-controls">
          <button className="header-button" id="todayButton">
            Today
          </button>
          <button className="header-button no-border" id="previousWeekButton">
            ◀
          </button>
          <button className="header-button no-border" id="nextWeekButton">
            ▶
          </button>
          <span className="current-month" id="currentMonthAndDay">
            {date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
            })}
          </span>
        </div>
      </div>
      <div className="header-part">
        <button className="header-button svg">
          Week
          <svg
            width="15px"
            height="15px"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
              fill="#000000"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
export default Header;
