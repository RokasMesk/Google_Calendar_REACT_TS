import {
  getEndOfWeek,
  getStartOfWeek,
  dateIsInRange,
  formatYearMonthDayForKey,
  formatKeyForCellsEvents,
  getStartDay,
} from './dateUtils';
import { Event } from './types';
import { MILLISECONDS_IN_HOUR } from './constants';
export const createArray = (length: number) => {
  return new Array(length).fill(undefined);
};

export function generateSimpleID(): string {
  return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

export function getEventsByWeek(
  events: Event[],
  calendarDate: Date
): [Event[], { [key: string]: Event[] }] {
  const groupedEvents: { [key: string]: Event[] } = {};
  const multiDayEvents: Event[] = [];
  events.forEach((event) => {
    const duration =
      event.endDateTime.getTime() - event.startDateTime.getTime();
    const startOfWeekDate = getStartOfWeek(calendarDate);
    const endOfWeekDate = getEndOfWeek(startOfWeekDate);
    const weekKey = formatYearMonthDayForKey(startOfWeekDate);
    if (
      event.startDateTime <= endOfWeekDate &&
      event.endDateTime >= startOfWeekDate &&
      duration > MILLISECONDS_IN_HOUR * 24
    )
      multiDayEvents.push(event);
    if (!groupedEvents[weekKey] && duration < MILLISECONDS_IN_HOUR * 24) {
      groupedEvents[weekKey] = [];
    }

    if (
      dateIsInRange(startOfWeekDate, endOfWeekDate, event.startDateTime) &&
      duration < MILLISECONDS_IN_HOUR * 24
    ) {
      groupedEvents[weekKey].push(event);
    }
  });

  return [multiDayEvents, groupedEvents];
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

export const getEventIndices = (event: Event, calendarDate: Date) => {
  const startOfWeek = getStartOfWeek(calendarDate);
  const endOfWeek = getEndOfWeek(startOfWeek);
  let startDayIndex = -1;
  let endDayIndex = -1;

  const doesEventSpanEntireWeek =
    event.startDateTime < startOfWeek && event.endDateTime > endOfWeek;
  const doesEventStartBeforeAndEndCurrentWeek =
    event.startDateTime < startOfWeek && event.endDateTime <= endOfWeek;
  const doesEventStartCurrentAndEndNextWeek =
    event.startDateTime >= startOfWeek && event.endDateTime > endOfWeek;

  const startDay = getStartDay(event.startDateTime);
  const endDay = getStartDay(event.endDateTime);
  if (doesEventSpanEntireWeek) {
    startDayIndex = 1;
    endDayIndex = 7;
  } else if (doesEventStartBeforeAndEndCurrentWeek) {
    startDayIndex = 1;
    endDayIndex = endDay;
  } else if (doesEventStartCurrentAndEndNextWeek) {
    startDayIndex = startDay;
    endDayIndex = 7;
  } else {
    startDayIndex = startDay;
    endDayIndex = endDay;
  }

  return { startDayIndex, endDayIndex };
};
