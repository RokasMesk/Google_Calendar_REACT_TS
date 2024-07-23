import styles from './header.module.css';

interface CurrentYearAndMonthProps {
  date: Date;
}

const CurrentYearAndMonth = ({ date }: CurrentYearAndMonthProps) => {
  return (
    <span className={styles.currentMonth}>
      {date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
      })}
    </span>
  );
};

export default CurrentYearAndMonth;
