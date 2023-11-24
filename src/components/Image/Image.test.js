// Image.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Image } from './Image';

describe('Image Component', () => {
  it('renders without crashing', () => {
    const mockData = {
      label: 'Mock Label',
      src: 'mock-image.jpg',
      title: 'Mock Title',
      size: 'small', // Assuming 'size' is one of the props for your Image component
    };

    const { container } = render(<Image {...mockData} />);

    // Query the image-component by tag name
    const imageComponent = container.querySelector('image-component');

    // Check if the image-component exists
    expect(imageComponent).toBeInTheDocument();
  });
});