import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { setCalendarDate } from '../store/slices/calendarDateSlice';
import { renderWithProviders } from '../utils/testUtils';
import Header from './Header';
import { addDays } from '../dateUtils';

const normalizeDate = (date: Date) => {
  const normalized = new Date(date);
  normalized.setMilliseconds(0);
  normalized.setSeconds(0);
  return normalized;
};

describe('Header Component', () => {
  describe('when initially rendered', () => {
    it('should display the calendar title', () => {
      renderWithProviders(<Header />);

      expect(screen.getByText(/Calendar/)).toBeInTheDocument();
    });

    it('should have the initial state of calendar date', () => {
      const { store } = renderWithProviders(<Header />);

      const initialState = store.getState().calendar.calendarDate;
      expect(initialState).toBeInstanceOf(Date);
    });
  });

  describe('when the date is changed via Redux action', () => {
    it('should update the calendar date in the Redux state', () => {
      const { store } = renderWithProviders(<Header />);

      const newDate = new Date(2024, 1, 1);
      store.dispatch(setCalendarDate(newDate));

      const updatedState = store.getState().calendar.calendarDate;
      expect(updatedState).toEqual(newDate);
    });
  });

  describe('when the user interacts with navigation buttons', () => {
    describe('and clicks the previous week button', () => {
      it('should update the state to the previous week', () => {
        const { store } = renderWithProviders(<Header />);

        const initialDate = store.getState().calendar.calendarDate;
        store.dispatch(setCalendarDate(initialDate));

        fireEvent.click(screen.getByRole('button', { name: /arrowLeft/i }));

        const updatedState = store.getState().calendar.calendarDate;
        expect(updatedState).toEqual(addDays(initialDate, -7));
      });
    });

    describe('and clicks the next week button', () => {
      it('should update the state date to the next week', () => {
        const { store } = renderWithProviders(<Header />);

        const initialDate = store.getState().calendar.calendarDate;
        store.dispatch(setCalendarDate(initialDate));
        fireEvent.click(screen.getByRole('button', { name: /arrowRight/i }));

        const updatedState = store.getState().calendar.calendarDate;
        expect(updatedState).toEqual(addDays(initialDate, +7));
      });
    });

    describe('and clicks the today button when not in the current week', () => {
      it("should update the state to today's date", () => {
        const { store } = renderWithProviders(<Header />);

        const initialDate = store.getState().calendar.calendarDate;
        store.dispatch(setCalendarDate(addDays(initialDate, -7)));
        fireEvent.click(screen.getByRole('button', { name: /today/i }));

        const updatedState = store.getState().calendar.calendarDate;
        expect(normalizeDate(updatedState)).toEqual(normalizeDate(new Date()));
      });
    });
  });
});
