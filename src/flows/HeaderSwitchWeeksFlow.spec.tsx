import { screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithProviders } from '../utils/testUtils';
import App from '../App';
import * as services from '../services';
import { MILLISECONDS_IN_HOUR } from '../constants';
import { addDays } from '../dateUtils';
import userEvent from '@testing-library/user-event';
import { within } from '@testing-library/react';

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
      await waitFor(() => {
        const main = screen.getByRole('main');
        expect(main).toBeInTheDocument();
      });
      const main = screen.getByRole('main');
      const header = screen.getByRole('banner');
      const initialDate = store.getState().calendar.calendarDate;
      await waitFor(() => {
        expect(within(main).getByText(/Event 1/i)).toBeInTheDocument();
      });
      userEvent.click(
        within(header).getByRole('button', { name: /arrowLeft/i })
      );
      expect(within(main).queryByText(/Event 1/i)).not.toBeInTheDocument();
      expect(store.getState().calendar.calendarDate).toEqual(
        addDays(initialDate, -7)
      );

      userEvent.click(
        within(header).getByRole('button', { name: /arrowRight/i })
      );
      expect(store.getState().calendar.calendarDate).toEqual(initialDate);

      expect(within(main).getByText(/Event 1/i)).toBeInTheDocument();
    });
  });
});
