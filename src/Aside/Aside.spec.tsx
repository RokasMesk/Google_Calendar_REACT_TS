import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithProviders } from '../utils/testUtils';
import Aside from './Aside';

describe('Aside Component', () => {
  describe('when initially rendered', () => {
    it('should display the Create Event button', () => {
      renderWithProviders(<Aside />);
      expect(screen.getByText(/Create Event/)).toBeInTheDocument();
    });
  });

  describe('when the Create Event button is clicked', () => {
    it('should dispatch the openModal action', () => {
      const { store } = renderWithProviders(<Aside />);
      fireEvent.click(screen.getByText(/Create Event/));
      const isOpen = store.getState().modal.isModalOpen;
      expect(isOpen).toBe(true);
    });
  });
});
