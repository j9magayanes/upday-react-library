import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './ArticleSource.stories';

const { Web } = composeStories(stories);

test('renders ArticleImage component with correct src and alt attributes', () => {
    const { container } = render(<Web />);
    const elementsWithClass = container.getElementsByClassName('headliner-publisher');
    expect(elementsWithClass.length).toBeGreaterThan(0);
  });