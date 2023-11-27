import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this line
import {ArticleDetail}from './ArticleDetail';

describe('Article Detail', () => {
    it('renders an article-detail tag', () => {
      const { container } = render(<ArticleDetail />);
      // Replace 'article-detail' with the HTML tag you are looking for
      const articleDetailTag = container.querySelector('article-detail');
  
      expect(articleDetailTag).toBeInTheDocument();
      // ... add more assertions as needed
    });
  });