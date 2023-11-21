// Header.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {Header} from './Header';

describe('Header Component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Header  />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText('EN')).toBeInTheDocument();
  });
});
