import { screen, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithProviders } from '../utils/testUtils';
import Aside from './Aside';
import userEvent from '@testing-library/user-event';

describe('Aside Component', () => {
  describe('when initially rendered', () => {
    it('should display the Create Event button', () => {
      renderWithProviders(<Aside />);
      const aside = screen.getByRole('complementary');
      expect(
        within(aside).getByRole('button', { name: 'Create Event' })
      ).toBeInTheDocument();
    });
  });

  describe('when the Create Event button is clicked', () => {
    it('should dispatch the openModal action', () => {
      const { store } = renderWithProviders(<Aside />);
      const aside = screen.getByRole('complementary');
      userEvent.click(within(aside).getByRole('button', { name: 'Create Event' }));
      const isOpen = store.getState().modal.isModalOpen;
      expect(isOpen).toBe(true);
    });
  });
});
