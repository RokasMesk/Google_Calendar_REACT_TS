import { MILLISECONDS } from "../constants";
import { Event } from "../types";
import styles from './weekCalendar.module.css';

interface CalendarEventProps {
    cellWidth: number | undefined;
    cellHeight: number | undefined;
    events: Event[];
    cellDate: Date;
}

const CalendarEvent = ({ cellWidth, cellHeight, events, cellDate }: CalendarEventProps) => {
    let numberOfOverlaps = 0;
    return (
        <div className={styles.calendarEventContainer}>
            {events.map((event) => {
                
                const startDateTime = new Date(event.startDateTime);
                const endDateTime = new Date(event.endDateTime);
                const duration = endDateTime.getTime() - startDateTime.getTime();
                const eventIsInCurrentCell = startDateTime.getDate() === cellDate.getDate() && startDateTime.getHours() === cellDate.getHours();
                const eventHeight = (duration / (MILLISECONDS)) * (cellHeight ?? 0);
                const marginTop = ((startDateTime.getMinutes()) / 60) * (cellHeight ?? 0);
                if (eventIsInCurrentCell && cellWidth) {
                    numberOfOverlaps++;
                    
                        return (
                            <div
                                className={styles.calendarEvent}
                                key={event.id}
                                style={{
                                    width: cellWidth / numberOfOverlaps,
                                    height: eventHeight,
                                    marginTop: marginTop,
                                    marginLeft: (cellWidth / numberOfOverlaps) * (numberOfOverlaps - 1),
                                }}
                            >
                                {event.eventTitle}
                            </div>
                        );
                }
                return null;
            })}
        </div>
    );
};

export default CalendarEvent;