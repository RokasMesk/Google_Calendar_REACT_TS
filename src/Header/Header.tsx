import styles from './header.module.css';
import {
  BurgerMenu,
  ArrowLeft,
  ArrowRight,
  ArrowDown,
} from '../components/icons';
import CurrentYearAndMonth from './CurrentYearAndMonth';
import classNames from 'classnames';
import { addDays } from '../dateUtils';
interface HeaderProps {
  calendarDate: Date;
  setCalendarDate: (calendarDate: Date) => void;
}

const Header = ({ calendarDate, setCalendarDate }: HeaderProps) => {
  return (
    <header className={styles.calendarHeader}>
      <div className={styles.headerPart}>
        <div className={styles.headerGroupControls}>
          <BurgerMenuButton />
          <span className={styles.calendarTitle}>Calendar</span>
        </div>
        <div className={styles.headerGroupControls}>
          <TodayButton setCalendarDate={setCalendarDate} />
          <ArrowLeftButton
            setCalendarDate={setCalendarDate}
            calendarDate={calendarDate}
          />
          <ArrowRightButton
            setCalendarDate={setCalendarDate}
            calendarDate={calendarDate}
          />

          <CurrentYearAndMonth calendarDate={calendarDate} />
        </div>
      </div>
      <div className={styles.headerPart}>
        <WeekButton />
      </div>
    </header>
  );
};

interface TodayButtonProps {
  setCalendarDate: (calendarDate: Date) => void;
}

const TodayButton = ({ setCalendarDate }: TodayButtonProps) => {
  const handleCurrentDay = () => {
    setCalendarDate(new Date());
  };
  return (
    <button className={styles.headerButton} onClick={handleCurrentDay}>
      Today
    </button>
  );
};

const WeekButton = () => {
  return (
    <button className={classNames(styles.headerButton, styles.svg)}>
      Week
      <ArrowDown width={15} height={15} />
    </button>
  );
};

const ArrowLeftButton = ({ calendarDate, setCalendarDate }: HeaderProps) => {
  const handlePreviousWeek = () => {
    setCalendarDate(addDays(calendarDate, -7));
  };
  return (
    <button
      className={classNames(styles.headerButton, styles.noBorder)}
      onClick={handlePreviousWeek}
    >
      <ArrowLeft width={30} height={20} />
    </button>
  );
};

const ArrowRightButton = ({ calendarDate, setCalendarDate }: HeaderProps) => {
  const handleNextWeek = () => {
    setCalendarDate(addDays(calendarDate, +7));
  };
  return (
    <button
      className={classNames(styles.headerButton, styles.noBorder)}
      onClick={handleNextWeek}
    >
      <ArrowRight width={30} height={20} />
    </button>
  );
};

const BurgerMenuButton = () => {
  return (
    <button
      className={classNames(styles.headerButton, styles.noBorder, styles.svg)}
    >
      <BurgerMenu width={36} height={36} />
    </button>
  );
};
export default Header;
