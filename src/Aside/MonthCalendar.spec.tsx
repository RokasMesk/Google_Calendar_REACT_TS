import { getByRole, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithProviders } from '../utils/testUtils';
import MonthCalendar from './MonthCalendar';
import { setCalendarDate } from '../store/slices/calendarDateSlice';
import userEvent from '@testing-library/user-event';
import { within } from '@testing-library/react';
import Aside from './Aside';

describe('MonthCalendar Component', () => {
  describe('when initially rendered', () => {
    it('should display the MonthCalendar component', () => {
      renderWithProviders(<Aside />);
      const aside = screen.getByRole('complementary');
      expect(within(aside).getByText('Su')).toBeInTheDocument();
      expect(within(aside).getByText('Mo')).toBeInTheDocument();
      expect(within(aside).getByText('Tu')).toBeInTheDocument();
      expect(within(aside).getByText('We')).toBeInTheDocument();
      expect(within(aside).getByText('Th')).toBeInTheDocument();
      expect(within(aside).getByText('Fr')).toBeInTheDocument();
      expect(within(aside).getByText('Sa')).toBeInTheDocument();
    });
  });

  describe('when the date changes', () => {
    it('should update the displayed month and year', () => {
      const { store } = renderWithProviders(<Aside />);
      const aside = screen.getByRole('complementary');
      const newDate = new Date(2024, 1, 1);

      store.dispatch(setCalendarDate(newDate));
      renderWithProviders(<Aside />);

      expect(within(aside).getByText('Feb 2024')).toBeInTheDocument();
    });
    describe('when date cell is clicked', () => {
      it('should update the calendar date', () => {
        const { store } = renderWithProviders(<Aside />);
        const newDate = new Date(2024, 1, 1);
        store.dispatch(setCalendarDate(newDate));
        const aside = screen.getByRole('complementary');
        userEvent.click(within(aside).getByText('18'));
        const updatedState = new Date(store.getState().calendar.calendarDate);
        expect(updatedState.getDate()).toBe(18);
      });
      it('should update the calendar month when clicked on not current month date', () => {
        const { store } = renderWithProviders(<Aside />);
        const currentDate = store.getState().calendar.calendarDate;
        const element = document.querySelector('.notCurrentMonthDay')!;

        userEvent.click(element);

        expect(store.getState().calendar.calendarDate.getMonth()).not.toBe(
          currentDate.getMonth()
        );
      });
    });
  });
});
