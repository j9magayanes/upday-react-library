import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this line
import {AdWrapper}from './AdWrapper';

describe('AdWrapper', () => {
    it('renders an element with the class "ad-block grow"', () => {
      const { container } = render(<AdWrapper />);
      
      // Use getElementsByClassName to get elements by class
      const elementsWithClass = container.getElementsByClassName('ad-block grow');
      
      // Assert that at least one element with the class is found
      expect(elementsWithClass.length).toBeGreaterThan(0);
    });
  });
  