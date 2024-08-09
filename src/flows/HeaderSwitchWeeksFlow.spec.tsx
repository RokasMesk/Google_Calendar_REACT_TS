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

describe('HeaderSwitchWeeksFlow', () => {
  describe('when user is at main page', () => {
    it('can switch weeks and view event in current week', async () => {
      const now = new Date();
      const oneHourFromNow = new Date(now.getTime() + MILLISECONDS_IN_HOUR);

      (services.getEventsFromServer as jest.Mock).mockResolvedValue([
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

      const { store } = renderWithProviders(<App />, { preloadedState });
      const initialDate = store.getState().calendar.calendarDate;
      await waitFor(() => {
        expect(screen.getByText(/Event 1/i)).toBeInTheDocument();
      });
      fireEvent.click(screen.getByRole('button', { name: /arrowLeft/i }));
      expect(screen.queryByText(/Event 1/i)).not.toBeInTheDocument();
      expect(store.getState().calendar.calendarDate).toEqual(
        addDays(initialDate, -7)
      );

      fireEvent.click(screen.getByRole('button', { name: /arrowRight/i }));
      expect(store.getState().calendar.calendarDate).toEqual(initialDate);

      expect(screen.getByText(/Event 1/i)).toBeInTheDocument();
    });
  });
});
