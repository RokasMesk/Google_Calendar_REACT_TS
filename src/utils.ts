import {
  getEndOfWeek,
  getStartOfWeek,
  dateIsInRange,
  formatYearMonthDayForKey,
  formatKeyForCellsEvents,
} from './dateUtils';
import { Event } from './types';
import { MILLISECONDS_IN_HOUR } from './constants';
export const createArray = (length: number) => {
  return new Array(length).fill(undefined);
};

export function generateSimpleID(): string {
  return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

export function getEventsByWeek(events: Event[]): { [key: string]: Event[] } {
  const groupedEvents: { [key: string]: Event[] } = {};

  events.forEach((event) => {
    const startOfWeekDate = getStartOfWeek(event.startDateTime);
    const endOfWeekDate = getEndOfWeek(event.startDateTime);
    const weekKey = formatYearMonthDayForKey(startOfWeekDate);

    if (!groupedEvents[weekKey]) {
      groupedEvents[weekKey] = [];
    }

    if (dateIsInRange(startOfWeekDate, endOfWeekDate, event.startDateTime)) {
      groupedEvents[weekKey].push(event);
    }
  });

  return groupedEvents;
}

export function getEventsForCells(events: Event[]): Map<string, Event[]> {
  const eventsMap = new Map();
  events?.forEach((event) => {
    const key = formatKeyForCellsEvents(event.startDateTime);
    if (!eventsMap.has(key)) {
      eventsMap.set(key, []);
    }
    eventsMap.get(key).push(event);
  });
  return eventsMap;
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
  return (cellWidth / overlappingEventsCount) * overlappingEventsCount;
};
