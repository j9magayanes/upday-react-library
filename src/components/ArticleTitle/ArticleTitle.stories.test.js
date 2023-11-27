import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './ArticleTitle.stories';

const { Web } = composeStories(stories);

test('renders ArticleTitle component with correct class', () => {
    render(<Web />);
    const element = screen.getByText('Web');
    expect(element).toBeInTheDocument();
  });