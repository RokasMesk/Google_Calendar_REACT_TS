import { screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithProviders } from '../utils/testUtils';
import App from '../App';
import * as services from '../services';
import { MILLISECONDS_IN_HOUR } from '../constants';
import { addDays } from '../dateUtils';

jest.mock('../services', () => ({
  ...jest.requireActual('../services'),
  getEventsFromServer: jest.fn(),
}));

describe('RetryLoadingEventsFlow', () => {
  describe('when events fail to load initially', () => {
    it('can retry loading events and display them correctly', async () => {
      const now = new Date();
      const oneHourFromNow = new Date(now.getTime() + MILLISECONDS_IN_HOUR);

      (services.getEventsFromServer as jest.Mock).mockRejectedValueOnce(
        new Error('Failed to fetch events')
      );

      (services.getEventsFromServer as jest.Mock).mockResolvedValueOnce([
        {
          id: '12345',
          eventTitle: 'Event 1',
          startDateTime: now,
          endDateTime: oneHourFromNow,
          description: 'Description 1',
        },
      ]);

      const preloadedState = {
        events: {
          events: [],
          status: 'idle' as 'idle',
          error: null,
        },
        calendar: {
          calendarDate: new Date(),
        },
      };

      renderWithProviders(<App />, { preloadedState });

      await waitFor(() => {
        expect(screen.getByText(/Failed to fetch events/i)).toBeInTheDocument();
      });

      fireEvent.click(screen.getByRole('button', { name: /Retry/i }));

      await waitFor(() => {
        expect(screen.getByText(/Event 1/i)).toBeInTheDocument();
      });
    });
  });
});
