import React from 'react';
import renderer from 'react-test-renderer';
import { Footer } from './Footer';

test('renders Footer component correctly', () => {
  const props = {
    args: {
      items: ['Item 1', 'Item 2', 'Item 3'],
    },
  };

  const component = renderer.create(<Footer {...props} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
