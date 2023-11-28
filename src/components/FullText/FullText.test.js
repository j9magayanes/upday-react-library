// Footer.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {FullText} from './FullText';

describe('FullText Component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<FullText fulltext='Mehr als'/>);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText('Mehr als')).toBeInTheDocument();
  });
});
