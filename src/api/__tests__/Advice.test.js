import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; // Matchery, np. toBeInTheDocument
import Advice from '../../pages/Advice';

jest.mock('../../components/Loader', () => () => (
  <div className="loader" data-testid="loader">
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
  </div>
));

test('renders loader initially', () => {
  render(<Advice />);
  expect(screen.getByTestId('loader')).toBeInTheDocument();
});

test('renders advice message after loading', async () => {
  render(<Advice />);
  await waitFor(
    () => {
      expect(
        screen.getByText('Strona z poradami będzie wkrótce dostępna!')
      ).toBeInTheDocument();
    },
    { timeout: 2000 } 
  );
});
