import React from 'react';
import renderer from 'react-test-renderer';
import { Ad } from './Ad';

test('renders Ad component correctly', () => {
  const props = {
    src: 'your-image-src',
    label: 'your-label',
    args: { /* your args object */ },
  };

  const component = renderer.create(<Ad {...props} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
