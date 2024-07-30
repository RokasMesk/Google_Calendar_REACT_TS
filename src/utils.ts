import { getEndOfWeek, getStartOfWeek,dateIsInRange, formatYearMonthDayForKey} from './dateUtils';
import { Event } from './types';
import { MILLISECONDS_IN_HOUR } from './constants';
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

export function getEventsByWeek(events: Event[]): { [key: string]: Event[] } {
  const groupedEvents: { [key: string]: Event[] } = {};

  events.forEach((event) => {
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

export function getEventsForCell(cellDate: Date, events: Event[]): Event[] {
  return events?.filter((event) => {
    const eventStartDateTime = new Date(event.startDateTime);
    const doesEventBelongToCurrentCell =
      eventStartDateTime.getDate() === cellDate.getDate() &&
      eventStartDateTime.getHours() === cellDate.getHours();
    return doesEventBelongToCurrentCell;
  });
}
export const getEventHeight = (duration: number, cellHeight: number) => {
  return (duration / MILLISECONDS_IN_HOUR) * (cellHeight ?? 0);
};

export const getMarginTop = (startDateTime: Date, cellHeight: number) => {
  return (startDateTime.getMinutes() / 60) * (cellHeight ?? 0);
};

export const getEventWidth = (
  cellWidth: number,
  overlappingEventsCount: number
) => {
  return cellWidth / (overlappingEventsCount + 1);
};

export const getMarginLeft = (
  cellWidth: number,
  overlappingEventsCount: number
) => {
  return (cellWidth / (overlappingEventsCount + 1)) * overlappingEventsCount;
};
