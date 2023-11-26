import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this line
import {Ad}from './Ad';

describe('Ad', () => {
  it('renders Ad', () => {
    const { getByText } = render(<Ad />);
    const element = getByText('Story continues below advertisement');
    expect(element).toBeInTheDocument();
  });
});