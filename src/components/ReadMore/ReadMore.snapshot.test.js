// ReadMore.test.js

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ReadMore } from './ReadMore';

test('renders ReadMore component correctly', () => {
  const args = {
    id: '123',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  const { container } = render(<ReadMore args={args} />);
  expect(container).toMatchSnapshot();
});
