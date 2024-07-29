import { MINUTES_IN_HOUR } from './constants';
import { getStartDay, getStartOfWeek } from './dateUtils';
import { Event } from './types';
import styles from './WeekCalendar/weekCalendar.module.css';
export const createArray = (length: number) => {
  return new Array(length).fill(undefined);
};

export function generateSimpleID(): string {
  return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

export const doesEventOverlapWithOtherEvents = (
  eventCurrent: Event,
  events: Event[]
): Event[] => {
  const eventStartDateTime = new Date(eventCurrent.startDateTime);
  const eventEndDateTime = new Date(eventCurrent.endDateTime);
  return events.filter((event: Event) => {
    const eventStart = new Date(event.startDateTime);
    const eventEnd = new Date(event.endDateTime);
    return (
      dateIsInRange(eventStart, eventEnd, eventStartDateTime) ||
      dateIsInRange(eventStart, eventEnd, eventEndDateTime)
    );
  });
};

export const dateIsInRange = (
  startDate: Date,
  endDate: Date,
  dateToCheck: Date
): boolean => {
  return startDate <= dateToCheck && endDate >= dateToCheck;
};
export function createEventElement(event: Event): HTMLElement {
  const eventElement = document.createElement('div');
  eventElement.className = styles.calendarEvent;
  eventElement.innerHTML = `<strong>${event.eventTitle}</strong>`;
  eventElement.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  return eventElement;
}

export function groupEventsByWeek(events: Event[]) {
  const eventsByWeek = {};

  events.forEach(event => {
    const startOfWeek = getStartOfWeek(new Date(event.startDateTime));
    const weekKey = startOfWeek.toISOString();

    if (!eventsByWeek[weekKey]) {
      eventsByWeek[weekKey] = [];
    }

    eventsByWeek[weekKey].push(event);
  });

  return eventsByWeek;
}


