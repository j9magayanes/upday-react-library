import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './Header.stories';

const { Website } = composeStories(stories);

test('renders ArticleImage component with correct src and alt attributes', () => {
    const element = render(<Website />);
    const headerElement = element.container.querySelector('#link')
    const headerAttribute = headerElement.getAttribute('href');
    expect(headerAttribute).toBe("https://www.upday.com/de");
    // Check for the src attribute


  });
