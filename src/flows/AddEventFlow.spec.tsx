import { screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithProviders } from '../utils/testUtils';
import App from '../App';
import * as services from '../services';
import { MILLISECONDS_IN_HOUR } from '../constants';

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
      const addEventButton = screen.getByText(/Create Event/i);

      expect(addEventButton).toBeInTheDocument();

      fireEvent.click(addEventButton);
      expect(store.getState().modal.isModalOpen).toBe(true);

      expect(screen.getByText(/Create new Event/i)).toBeInTheDocument();

      const inputField: HTMLInputElement =
        screen.getByLabelText(/Event Title/i);
      fireEvent.change(inputField, { target: { value: 'Event 1' } });

      expect(inputField.value).toBe('Event 1');

      expect(screen.getByTestId(/addEventSubmit/i)).toBeInTheDocument();
      fireEvent.click(screen.getByTestId(/addEventSubmit/i));

      await waitFor(() => {
        expect(store.getState().modal.isModalOpen).toBe(false);
      });
      expect(store.getState().events.events.length).toBe(1);
      const eventText = screen.getByText(/Event 1/i);
      expect(eventText).toBeInTheDocument();
    });
  });
});
