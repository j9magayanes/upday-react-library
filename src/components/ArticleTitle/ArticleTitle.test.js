import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import {ArticleTitle}from './ArticleTitle';

describe('Article Title', () => {
    it('renders an article-image tag', () => {
      const { container } = render(<ArticleTitle />);
      const articleTitle = container.querySelector('article-title');
  
      expect(articleTitle).toBeInTheDocument();
      // ... add more assertions as needed
    });
  });