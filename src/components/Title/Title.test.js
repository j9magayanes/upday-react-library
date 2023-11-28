// Title.test.js

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Title } from './Title';

test('renders Title component with correct class and title', () => {
  const args = {
    appName: 'meinestadt',
    title: 'Your Title Here',
  };

  const { getByText, container } = render(<Title args={args} />);

  const titleElement = getByText(args.title);
  expect(titleElement).toBeInTheDocument();

  // Ensure correct class is applied based on the appName
  expect(container.firstChild).toHaveClass('title meinestadt');
});
