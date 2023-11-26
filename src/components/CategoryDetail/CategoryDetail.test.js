import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this line
import {CategoryDetail}from './CategoryDetail';

describe('CategoryDetail', () => {
  it('renders Category Detail', () => {
    const { container } = render(<CategoryDetail />);
    const categoryDetail = container.querySelector('category-detail');
    expect(categoryDetail).toBeInTheDocument();
  });
});