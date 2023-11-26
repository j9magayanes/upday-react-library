import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import {ArticleImage}from './ArticleImage';

describe('Article Image', () => {
    it('renders an article-image tag', () => {
      const { container } = render(<ArticleImage />);
      const articleImageTag = container.querySelector('article-image');
  
      expect(articleImageTag).toBeInTheDocument();
      // ... add more assertions as needed
    });
  });