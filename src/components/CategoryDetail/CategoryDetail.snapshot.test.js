import React from 'react';
import renderer from 'react-test-renderer';
import { CategoryDetail } from './CategoryDetail';

test('renders CategoryDetail component correctly', () => {
  const props = {
    category: 'Your Category',
  };

  const component = renderer.create(<CategoryDetail {...props} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
