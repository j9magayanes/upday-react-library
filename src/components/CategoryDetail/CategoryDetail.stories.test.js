import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './CategoryDetail.stories';

const { Meinestadt } = composeStories(stories);

test('renders CategoryDetail component with correct class and text', () => {

  
        render(<Meinestadt />);
        const element = screen.getByText('Top News');
    expect(element).toBeInTheDocument();

  
  });
  