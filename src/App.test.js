import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn fuselage link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Check Fuselage's Library/i);
  expect(linkElement).toBeInTheDocument();
});
