import '../styles/aside.css';
import AsideCalendarWidget from './AsideCalendarWidget';
interface AsideProps {
  date: Date;
}
function Aside({ date }: AsideProps) {
  return (
    <aside className="month-aside">
      <button className="add-event-button" id="addEventButton">
        Create Event
      </button>
      <AsideCalendarWidget date={date} />
    </aside>
  );
}

export default Aside;
