// ReadMore.stories.js

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { composeStories } from '@storybook/testing-react';


import * as stories from './ReadMore.stories';

const { Web, Meinestadt } = composeStories(stories);


test('renders ReadMore component with correct text for Web', () => {
  const { container} = render(<Web />);
  const readMoreElement = container.querySelector('span');

  expect(readMoreElement).toBeInTheDocument();
  expect(readMoreElement).toHaveTextContent('Read More');
});

test('renders ReadMore component with correct text for Meinestadt', () => {
  const { container } = render(<Meinestadt />);
  const readMoreElement = container.querySelector('span');

  expect(readMoreElement).toBeInTheDocument();
  expect(readMoreElement).toHaveTextContent('Read More');
});
