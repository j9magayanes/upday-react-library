import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './FullText.stories';

const { Meinestadt } = composeStories(stories);

test('renders ArticleDetail component with correct class and text', () => {
    const element= render(<Meinestadt />);
  
    // Check for the class

    // Check if the h2 element is in the document
    const fullTextElement = element.container.querySelector('#fulltext')
    const textAttribute = fullTextElement.getAttribute('title');
    const expectedText = 'meinestadt'
    expect(textAttribute).toBe(expectedText);

  });
  