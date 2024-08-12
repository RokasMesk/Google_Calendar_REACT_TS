import { screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithProviders } from '../utils/testUtils';
import App from '../App';
import * as services from '../services';
import { MILLISECONDS_IN_HOUR } from '../constants';
import userEvent from '@testing-library/user-event';
import { within } from '@testing-library/react';
jest.mock('../services', () => ({
  ...jest.requireActual('../services'),
  getEventsFromServer: jest.fn(),
  saveEventToServer: jest.fn(),
}));

describe('Add event Happy Flow', () => {
  describe('when user is at main page', () => {
    it('can create and display the event', async () => {
      (services.getEventsFromServer as jest.Mock).mockResolvedValue([
        {
          id: '12345',
          eventTitle: 'Event 1',
          startDateTime: new Date(),
          endDateTime: new Date(new Date().getTime() + MILLISECONDS_IN_HOUR),
          description: 'Description 1',
        },
      ]);
      (services.saveEventToServer as jest.Mock).mockResolvedValue({
        id: '12345',
        eventTitle: 'Event 1',
        startDateTime: new Date().toISOString(),
        endDateTime: new Date(
          new Date().getTime() + MILLISECONDS_IN_HOUR
        ).toISOString(),
        description: 'Description 1',
      });

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
      const aside = screen.getByRole('complementary');
      const addEventButton = within(aside).getByRole('button', {
        name: 'Create Event',
      });

      expect(addEventButton).toBeInTheDocument();

      userEvent.click(addEventButton);
      const modal = screen.getByRole('dialog');
      expect(store.getState().modal.isModalOpen).toBe(true);

      expect(modal).toBeInTheDocument();

      const inputField: HTMLInputElement =
        within(modal).getByLabelText(/Event Title/i);
      userEvent.type(inputField, 'Event 1');

      expect(inputField.value).toBe('Event 1');

      expect(
        within(modal).getByRole('button', { name: 'Submit' })
      ).toBeInTheDocument();
      userEvent.click(within(modal).getByRole('button', { name: 'Submit' }));

      await waitFor(() => {
        expect(store.getState().modal.isModalOpen).toBe(false);
      });
      const main = screen.getByRole('main');
      expect(store.getState().events.events.length).toBe(1);
      const eventText = within(main).getByText(/Event 1/i);
      expect(eventText).toBeInTheDocument();
    });
  });
});
