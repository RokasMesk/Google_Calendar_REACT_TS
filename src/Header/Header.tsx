import styles from './header.module.css';
import {
  BurgerMenu,
  ArrowLeft,
  ArrowRight,
  ArrowDown,
} from '../components/icons';
import TodayButton from './TodayButton';
import CurrentYearAndMonth from './CurrentYearAndMonth';
interface HeaderProps {
  date: Date;
}

const Header = ({ date }: HeaderProps) => {
  return (
    <header className={styles.calendarHeader}>
      <div className={styles.headerPart}>
        <div className={styles.headerGroupControls}>
          <BurgerMenuButton />
          <span className={styles.calendarTitle}>Calendar</span>
        </div>
        <div className={styles.headerGroupControls}>
          <TodayButton />
          <ArrowLeftButton />
          <ArrowRightButton />

          <CurrentYearAndMonth date={date} />
        </div>
      </div>
      <div className={styles.headerPart}>
        <WeekButton />
      </div>
    </header>
  );
};

const WeekButton = () => {
  return (
    <button className={`${styles.headerButton} ${styles.svg}`}>
      Week
      <ArrowDown width={15} height={15} />
    </button>
  );
};

const ArrowLeftButton = () => {
  return (
    <button className={`${styles.headerButton} ${styles.noBorder}`}>
      <ArrowLeft width={30} height={20} />
    </button>
  );
};

const ArrowRightButton = () => {
  return (
    <button className={`${styles.headerButton} ${styles.noBorder}`}>
      <ArrowRight width={30} height={20} />
    </button>
  );
};

const BurgerMenuButton = () => {
  return (
    <button
      className={`${styles.headerButton} ${styles.noBorder} ${styles.svg}`}
    >
      <BurgerMenu width={36} height={36} />
    </button>
  );
};
export default Header;
