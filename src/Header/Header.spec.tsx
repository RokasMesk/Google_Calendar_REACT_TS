import {  screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { setCalendarDate } from '../store/slices/calendarDateSlice';
import { renderWithProviders } from '../utils/testUtils';
import Header from './Header';
import { addDays } from '../dateUtils';
import userEvent from '@testing-library/user-event';
import { within } from '@testing-library/react';

const normalizeDate = (date: Date) => {
  const normalized = new Date(date);
  normalized.setMilliseconds(0);
  normalized.setSeconds(0);
  return normalized;
};

describe('Header Component', () => {
  describe('when the user interacts with navigation buttons', () => {
    describe('and clicks the previous week button', () => {
      it('should update the state to the previous week', () => {
        const { store } = renderWithProviders(<Header />);
        const header = screen.getByRole('banner');
        const initialDate = store.getState().calendar.calendarDate;
        store.dispatch(setCalendarDate(initialDate));

        userEvent.click(within(header).getByRole('button', { name: /Previous/i }));

        const updatedState = store.getState().calendar.calendarDate;
        expect(updatedState).toEqual(addDays(initialDate, -7));
      });
    });

    describe('and clicks the next week button', () => {
      it('should update the state date to the next week', () => {
        const { store } = renderWithProviders(<Header />);
        const header = screen.getByRole('banner');
        const initialDate = store.getState().calendar.calendarDate;
        store.dispatch(setCalendarDate(initialDate));
        userEvent.click(within(header).getByRole('button', { name: /Next/i }));

        const updatedState = store.getState().calendar.calendarDate;
        expect(updatedState).toEqual(addDays(initialDate, +7));
      });
    });

    describe('and clicks the today button when not in the current week', () => {
      it("should update the state to today's date", () => {
        const { store } = renderWithProviders(<Header />);
        const header = screen.getByRole('banner');
        const initialDate = store.getState().calendar.calendarDate;
        store.dispatch(setCalendarDate(addDays(initialDate, -7)));
        userEvent.click(within(header).getByRole('button', { name: /Today/i }));

        const updatedState = store.getState().calendar.calendarDate;
        expect(normalizeDate(updatedState)).toEqual(normalizeDate(new Date()));
      });
    });
  });
});
