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
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setCalendarDate } from '../store';

const Header = () => {
  const dispatch = useDispatch();
  const calendarDate = useSelector(
    (state: RootState) => state.calendar.calendarDate
  );

  const handleCurrentDay = () => {
    dispatch(setCalendarDate(new Date()));
  };

  const handlePreviousWeek = () => {
    dispatch(setCalendarDate(addDays(calendarDate, -7)));
  };

  const handleNextWeek = () => {
    dispatch(setCalendarDate(addDays(calendarDate, +7)));
  };

  return (
    <header className={styles.calendarHeader}>
      <div className={styles.headerPart}>
        <div className={styles.headerGroupControls}>
          <BurgerMenuButton />
          <span className={styles.calendarTitle}>Calendar</span>
        </div>
        <div className={styles.headerGroupControls}>
          <TodayButton handleClick={handleCurrentDay} />
          <ArrowLeftButton handleClick={handlePreviousWeek} />
          <ArrowRightButton handleClick={handleNextWeek} />

          <CurrentYearAndMonth />
        </div>
      </div>
      <div className={styles.headerPart}>
        <WeekButton />
      </div>
    </header>
  );
};

const TodayButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <button
      className={styles.headerButton}
      onClick={handleClick}
      aria-label="Today"
    >
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

const ArrowLeftButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <button
      className={classNames(styles.headerButton, styles.noBorder)}
      onClick={handleClick}
      aria-label="Previous"
    >
      <ArrowLeft width={30} height={20} />
    </button>
  );
};

const ArrowRightButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <button
      className={classNames(styles.headerButton, styles.noBorder)}
      onClick={handleClick}
      aria-label="Next"
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
