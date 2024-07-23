import Header from './Header/Header';
import Aside from './Aside/Aside';
import CalendarMain from './Calendar-main/CalendarMain';
import styles from './index.module.css';

function App() {
  const currentDate = new Date();
  return (
    <div className={styles.appContainer}>
      <Header date={currentDate} />
      <Aside date={currentDate} />
      <CalendarMain date={currentDate} />
    </div>
  );
}

export default App;
