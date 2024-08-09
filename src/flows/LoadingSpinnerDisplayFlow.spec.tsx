import { screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithProviders } from '../utils/testUtils';
import App from '../App';
import * as services from '../services';

jest.mock('../services', () => ({
  ...jest.requireActual('../services'),
  getEventsFromServer: jest.fn(),
}));

describe('LoadingSpinnerFlow', () => {
  describe('when events are being fetched', () => {
    it('displays and hides the loading spinner appropriately', async () => {
      // Simulate a delay in fetching events
      (services.getEventsFromServer as jest.Mock).mockImplementation(
        () => new Promise((resolve) => setTimeout(() => resolve([]), 1000))
      );

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
        expect(screen.getByTestId('loadingSpinner')).toBeInTheDocument();
      });

      await waitFor(() => {
        expect(screen.queryByTestId('loadingSpinner')).not.toBeInTheDocument();
      });
    });
  });
});
