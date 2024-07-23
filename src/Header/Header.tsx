import styles from './header.module.css';

interface HeaderProps {
  date: Date;
}

const Header = ({ date }: HeaderProps) => {
  return (
    <header className={styles.calendarHeader}>
      <div className={styles.headerPart}>
        <div className={styles.headerGroupControls}>
          <button
            className={`${styles.headerButton} ${styles.noBorder} ${styles.svg}`}
          >
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
          <span className={styles.calendarTitle}>Calendar</span>
        </div>
        <div className={styles.headerGroupControls}>
          <button className={styles.headerButton} id="todayButton">
            Today
          </button>
          <button
            className={`${styles.headerButton} ${styles.noBorder}`}
            id="previousWeekButton"
          >
            ◀
          </button>
          <button
            className={`${styles.headerButton} ${styles.noBorder}`}
            id="nextWeekButton"
          >
            ▶
          </button>
          <span className={styles.currentMonth} id="currentMonthAndDay">
            {date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
            })}
          </span>
        </div>
      </div>
      <div className={styles.headerPart}>
        <button className={`${styles.headerButton} ${styles.svg}`}>
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
};

export default Header;
