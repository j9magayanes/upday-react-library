import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import {ArticleSource}from './ArticleSource';

describe('Article Source', () => {
    it('renders an article-image tag', () => {
      const { container } = render(<ArticleSource />);
      const articleSource = container.querySelector('article-source');
  
      expect(articleSource).toBeInTheDocument();
      // ... add more assertions as needed
    });
  });