import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithProviders } from '../utils/testUtils';
import MonthCalendar from './MonthCalendar';
import { setCalendarDate } from '../store/slices/calendarDateSlice';

describe('MonthCalendar Component', () => {
  describe('when initially rendered', () => {
    it('should display the correct month and year', () => {
      const { store } = renderWithProviders(<MonthCalendar />);
      const calendarDate = store.getState().calendar.calendarDate;
      const monthYear = `${calendarDate.toLocaleString('default', { month: 'short' })} ${calendarDate.getFullYear()}`;
      expect(screen.getByText(monthYear)).toBeInTheDocument();
    });
    it('should display the MonthCalendar component', () => {
      renderWithProviders(<MonthCalendar />);
      const dayLabels = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
      dayLabels.forEach((label) => {
        expect(screen.getByText(label)).toBeInTheDocument();
      });
    });
  });

  describe('when the date changes', () => {
    it('should update the displayed month and year', () => {
      const { store } = renderWithProviders(<MonthCalendar />);
      const newDate = new Date(2024, 1, 1);

      store.dispatch(setCalendarDate(newDate));

      renderWithProviders(<MonthCalendar />);

      const updatedState = new Date(store.getState().calendar.calendarDate);
      const monthYear = `${updatedState.toLocaleString('default', { month: 'short' })} ${updatedState.getFullYear()}`;
      renderWithProviders(<MonthCalendar />);
      expect(screen.getByText(monthYear)).toBeInTheDocument();
    });
    describe('when date cell is clicked', () => {
      it('should update the calendar date', () => {
        const { store } = renderWithProviders(<MonthCalendar />);
        const newDate = new Date(2024, 1, 1);
        store.dispatch(setCalendarDate(newDate));
        fireEvent.click(screen.getByText('18'));
        const updatedState = new Date(store.getState().calendar.calendarDate);
        expect(updatedState.getDate()).toBe(18);
      });
      it('should update the calendar month when clicked on not current month date', () => {
        const { store } = renderWithProviders(<MonthCalendar />);
        const currentDate = store.getState().calendar.calendarDate;
        const element = document.querySelector('.notCurrentMonthDay');
        if (element) {
          fireEvent.click(element);
        }
        expect(store.getState().calendar.calendarDate.getMonth()).not.toBe(
          currentDate.getMonth()
        );
      });
    });
  });
});
