// Headline.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {Headline} from './Headline';

describe('Header Component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Headline args={{headline: 'Test'}} />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText('Test')).toBeInTheDocument();
  });
});
