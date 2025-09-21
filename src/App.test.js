import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import App from './App';

test('renders cat age calculator', () => {
  render(<App />);
  const headingElement = screen.getByText(/Cat Age Calculator/i);
  expect(headingElement).toBeInTheDocument();
});
