import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders counter and buttons', () => {
  render(<Counter />);
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');
});

test('increments counter', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText('Increment'));
  expect(screen.getByTestId('count')).toHaveTextContent('1');
});

test('decrements counter', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText('Decrement'));
  expect(screen.getByTestId('count')).toHaveTextContent('-1');
});