import React from 'react';
import renderer from 'react-test-renderer';
import { ImageCredits } from './ImageCredits';

test('renders ImageCredits component correctly', () => {
  const component = renderer.create(<ImageCredits />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
