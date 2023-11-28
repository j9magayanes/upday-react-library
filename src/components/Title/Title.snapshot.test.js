// Title.test.js

import React from 'react';
import renderer from 'react-test-renderer';
import { Title } from './Title';

test('renders Title component correctly', () => {
  const args = {
    appName: 'meinestadt',
    title: 'Your Title Here',
  };

  const component = renderer.create(<Title args={args} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

