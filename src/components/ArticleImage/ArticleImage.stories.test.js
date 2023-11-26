import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './ArticleImage.stories';

const { Web } = composeStories(stories);

test('renders ArticleImage component with correct src and alt attributes', () => {
    render(<Web />);
  
    // Use getByAltText to select the img element by its alt attribute
    const articleImageElement = screen.getByAltText('test');
  
    // Check for the src attribute
    expect(articleImageElement).toHaveAttribute(
      'src',
      'https://img-staging.yana.asideas.de/image/fetch/w_700,h_394,c_fill,f_webp,q_auto:eco/https%3A%2F%2Fcdn-images.rtp.pt%2Fnoticias%2Fimages%2Fdefault_noticias.png%3Fw%3D860%26q%3D90%26auto%3Dformat'
    );
  
    // Check for the alt attribute
    expect(articleImageElement).toHaveAttribute('alt', 'test');
  });