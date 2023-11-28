
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this line
import { ReadMore } from './ReadMore';

test('renders ReadMore component with correct text', () => {
    const args = {
      id: '123',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    };
  
    const { container } = render(<ReadMore args={args} />);
    console.log(container.innerHTML); // Log the rendered HTML
  
    const readMoreElement = document.getElementById(`storybook-read-more-${args.id}`);
  
    expect(readMoreElement).toBeInTheDocument();
    expect(readMoreElement).toHaveTextContent(args.text);
  });
