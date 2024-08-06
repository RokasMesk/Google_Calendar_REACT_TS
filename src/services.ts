import { Event } from './types';
import { convertEventDatesToObjects } from './dateUtils';
const API_URL = 'http://localhost:3002/events';

export const saveEventToServer = async (event: Event): Promise<Event> => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    });
    return await response.json();
  } catch (error) {
    console.error('Error saving event:', error);
    throw error;
  }
};

export const getEventsFromServer = async (): Promise<Event[]> => {
  try {
    const response = await fetch(API_URL);
    const events = await response.json();
    return events.map(convertEventDatesToObjects);
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

