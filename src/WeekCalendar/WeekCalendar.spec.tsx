import { screen, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WeekCalendar from './WeekCalendar';
import { renderWithProviders } from '../utils/testUtils';
import { MILLISECONDS_IN_HOUR } from '../constants';

describe('WeekCalendar Component', () => {
  it('should display LoadingSpinner when events are loading', () => {
    const preloadedState = {
      events: {
        events: [],
        status: 'loading' as 'loading',
        error: null,
      },
      calendar: {
        calendarDate: new Date(),
      },
    };
    renderWithProviders(<WeekCalendar />, { preloadedState });
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('should display ErrorMessage when events failed to load', () => {
    const preloadedState = {
      events: {
        events: [],
        status: 'failed' as 'failed',
        error: 'Failed to fetch events',
      },
      calendar: {
        calendarDate: new Date(),
      },
    };

    renderWithProviders(<WeekCalendar />, { preloadedState });

    expect(screen.getByText(/Failed to fetch events/i)).toBeInTheDocument();
  });

  it('should display retry button when failed to fetch', () => {
    const preloadedState = {
      events: {
        events: [],
        status: 'failed' as 'failed',
        error: 'Failed to fetch events',
      },
      calendar: {
        calendarDate: new Date(),
      },
    };

    renderWithProviders(<WeekCalendar />, { preloadedState });
    expect(screen.getByRole('button', { name: /Retry/i })).toBeInTheDocument();
  });
  it('should display events when events are loaded', () => {
    const preloadedState = {
      events: {
        events: [
          {
            id: '1',
            eventTitle: 'Event 1',
            startDateTime: new Date(),
            endDateTime: new Date(new Date().getTime() + MILLISECONDS_IN_HOUR),
            description: 'Description 1',
          },
          {
            id: '2',
            eventTitle: 'Event 2',
            startDateTime: new Date(),
            endDateTime: new Date(new Date().getTime() + MILLISECONDS_IN_HOUR),
            description: 'Description 2',
          },
        ],
        status: 'succeeded' as 'succeeded',
        error: null,
      },
      calendar: {
        calendarDate: new Date(),
      },
    };
    renderWithProviders(<WeekCalendar />, { preloadedState });
    const main = screen.getByRole('main');
    expect(within(main).getByText(/Event 1/i)).toBeInTheDocument();
    expect(within(main).getByText(/Event 2/i)).toBeInTheDocument();
  });
});
