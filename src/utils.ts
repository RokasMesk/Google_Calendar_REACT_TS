import { start } from 'repl';
import { MINUTES_IN_HOUR } from './constants';
import { getEndOfWeek, getStartDay, getStartOfWeek } from './dateUtils';
import { Event } from './types';
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

export function formatYearMonthDayForKey(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function groupEventsByWeek(events: Event[]): { [key: string]: Event[] } {
  const groupedEvents: { [key: string]: Event[] } = {};

  events.forEach(event => {
    const eventDate = new Date(event.startDateTime);
    const startOfWeekDate = getStartOfWeek(eventDate);
    const endOfWeekDate = getEndOfWeek(eventDate);
    const weekKey = formatYearMonthDayForKey(startOfWeekDate);

    if (!groupedEvents[weekKey]) {
      groupedEvents[weekKey] = [];
    }

    if (dateIsInRange(startOfWeekDate, endOfWeekDate, eventDate)) {
      groupedEvents[weekKey].push(event);
    }
  });

  return groupedEvents;
}