import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './ArticlePage.stories';

const { Meinestadt } = composeStories(stories);

test('renders ArticleImage component with correct src and alt attributes', () => {
    const { container } = render(<Meinestadt />);
    const elementsWithClass = container.getElementsByClassName('ad-block grow');
    expect(elementsWithClass.length).toBeGreaterThan(0);
  });