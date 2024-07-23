import Header from './Header/Header';
import Aside from './Aside/Aside';
import WeekCalendar from './Week-calendar/WeekCalendar';
import styles from './index.module.css';

function App() {
  const currentDate = new Date();
  return (
    <div className={styles.appContainer}>
      <Header date={currentDate} />
      <Aside date={currentDate} />
      <WeekCalendar date={currentDate} />
    </div>
  );
}

export default App;
