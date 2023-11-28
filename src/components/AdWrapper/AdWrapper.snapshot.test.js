import React from 'react';
import renderer from 'react-test-renderer';
import { AdWrapper } from './AdWrapper';

test('renders AdWrapper component correctly', () => {
  const component = renderer.create(<AdWrapper>Test Content</AdWrapper>);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
