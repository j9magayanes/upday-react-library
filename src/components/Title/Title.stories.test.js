// ReadMore.stories.js

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { composeStories } from '@storybook/testing-react';


import * as stories from './Title.stories';

const { Default, Meinestadt } = composeStories(stories);


test('renders ReadMore component with correct text for Web', () => {
  const { container} = render(<Default />);
  const titleElement = container.querySelector('h1');

  expect(titleElement).toBeInTheDocument();
  expect(titleElement ).toHaveTextContent('Selenskyj fordert EU-Beitrittsverhandlungen');
});

test('renders ReadMore component with correct text for Meinestadt', () => {
  const { container } = render(<Meinestadt />);
  const titleElement  = container.querySelector('h1');

  expect(titleElement).toBeInTheDocument();
  expect(titleElement).toHaveTextContent('Selenskyj fordert EU-Beitrittsverhandlungen');
});
