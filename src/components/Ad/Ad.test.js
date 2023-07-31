import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this line
import {Ad}from './Ad';

describe('Ad', () => {
  it('renders a p tag with the text "Hello, World!"', () => {
    const { getByText } = render(<Ad />);
    const pElement = getByText('Story continues below advertisement');
    expect(pElement).toBeInTheDocument();
  });
});