import React from 'react';
import { render } from '@testing-library/react';
import { Default } from './AdWrapper.stories';

describe('AdWrapper Stories', () => {
    it('renders Default story', () => {
      const { container } = render(<Default />);
  
      // Replace 'your-class' with the actual class you are looking for
      const elementsWithClass = container.getElementsByClassName('ad-block grow');
  
      // Assert that at least one element with the class is found
      expect(elementsWithClass.length).toBeGreaterThan(0);
      // ... add more assertions as needed
    });
  });