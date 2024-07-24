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
  date: Date;
  setCurrentDate: (date: Date) => void;
}

const Header = ({ date, setCurrentDate }: HeaderProps) => {
  return (
    <header className={styles.calendarHeader}>
      <div className={styles.headerPart}>
        <div className={styles.headerGroupControls}>
          <BurgerMenuButton />
          <span className={styles.calendarTitle}>Calendar</span>
        </div>
        <div className={styles.headerGroupControls}>
          <TodayButton setCurrentDate={setCurrentDate} />
          <ArrowLeftButton setCurrentDate={setCurrentDate} date={date} />
          <ArrowRightButton setCurrentDate={setCurrentDate} date={date} />

          <CurrentYearAndMonth date={date} />
        </div>
      </div>
      <div className={styles.headerPart}>
        <WeekButton />
      </div>
    </header>
  );
};

interface TodayButtonProps {
  setCurrentDate: (date: Date) => void;
}

const TodayButton = ({ setCurrentDate }: TodayButtonProps) => {
  const handleCurrentDay = () => {
    setCurrentDate(new Date());
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

const ArrowLeftButton = ({ date, setCurrentDate }: HeaderProps) => {
  const handlePrevWeek = () => {
    setCurrentDate(addDays(date, -7));
  };
  return (
    <button
      className={classNames(styles.headerButton, styles.noBorder)}
      onClick={handlePrevWeek}
    >
      <ArrowLeft width={30} height={20} />
    </button>
  );
};

const ArrowRightButton = ({ date, setCurrentDate }: HeaderProps) => {
  const handleNextWeek = () => {
    setCurrentDate(addDays(date, +7));
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
