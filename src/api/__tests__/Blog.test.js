import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; // Matchery, np. toBeInTheDocument
import Blog from '../../pages/Blog';

jest.mock('../../components/Loader', () => () => (
  <div className="loader" data-testid="loader">
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
  </div>
));

test('renders loader initially', () => {
  render(<Blog />);
  expect(screen.getByTestId('loader')).toBeInTheDocument();
});

test('renders blog message after loading', async () => {
  render(<Blog />);
  await waitFor(
    () => {
      expect(
        screen.getByText('Strona z blogami będzie wkrótce dostępna!')
      ).toBeInTheDocument();
    },
    { timeout: 2000 } 
  );
});
