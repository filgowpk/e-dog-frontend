import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; // Importuje matchery, np. toBeInTheDocument
import Quiz from '../../pages/Quiz';

jest.mock('../../components/Loader', () => () => (
  <div className="loader" data-testid="loader">
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
  </div>
));

test('renders loader initially', () => {
  render(<Quiz />);
  expect(screen.getByTestId('loader')).toBeInTheDocument()
});

test('renders quiz message after loading', async () => {
    render(<Quiz />);
    await waitFor(
      () => {
        expect(
          screen.getByText('Strona z quizami o psach będzie wkrótce dostępna!')
        ).toBeInTheDocument();
      },
      { timeout: 2000 } 
    );
  });
