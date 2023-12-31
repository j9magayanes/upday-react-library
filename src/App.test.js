import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this line
import App from './App';

describe('App', () => {
  it('renders a p tag with the text "Hello, World!"', () => {
    const { getByText } = render(<App />);
    const pElement = getByText('Edit');
    expect(pElement).toBeInTheDocument();
  });
});